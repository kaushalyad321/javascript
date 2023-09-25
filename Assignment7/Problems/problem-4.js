// 4. Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number
class RateLimiter {
  constructor(maxConcurrentRequests) {
    this.maxConcurrentRequests = maxConcurrentRequests;
    this.currentRequests = 0;
    this.queue = [];
  }

  async executeRequest(requestFunction) {
    return new Promise(async (resolve, reject) => {
      const runRequest = async () => {
        try {
          this.currentRequests++;
          const result = await requestFunction();
          resolve(result);
        } catch (error) {
          reject(error);
        } finally {
          this.currentRequests--;
          this.dequeue();
        }
      };

      if (this.currentRequests < this.maxConcurrentRequests) {
        runRequest();
      } else {
        this.queue.push(runRequest);
      }
    });
  }

  async enqueueRequest(requestFunction) {
    return this.executeRequest(requestFunction);
  }

  dequeue() {
    if (
      this.queue.length > 0 &&
      this.currentRequests < this.maxConcurrentRequests
    ) {
      const nextRequest = this.queue.shift();
      nextRequest();
    }
  }
}

const maxConcurrentRequests = 5;
const rateLimiter = new RateLimiter(maxConcurrentRequests);

function simulateRequest(requestId, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Request ${requestId} completed`);
      resolve(`Response for Request ${requestId}`);
    }, delay);
  });
}

async function main() {
  for (let i = 1; i <= 5; i++) {
    const requestId = i;
    const requestDelay = 1000 * i;
    const request = () => simulateRequest(requestId, requestDelay);
    rateLimiter.enqueueRequest(request).then((response) => {
      console.log(`Response for Request ${requestId}: ${response}`);
    });
  }
}

main();
