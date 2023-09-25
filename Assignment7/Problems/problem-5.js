// 5.  Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit
class TaskQueue {
  constructor(concurrencyLimit) {
    this.concurrencyLimit = concurrencyLimit;
    this.queue = [];
    this.runningCount = 0;
  }
  async runTask(task) {
    return new Promise(async (resolve, reject) => {
      const execute = async () => {
        try {
          this.runningCount++;
          const result = await task();
          resolve(result);
        } catch (error) {
          reject(error);
        } finally {
          this.runningCount--;
          this.dequeue();
        }
      };

      if (this.runningCount < this.concurrencyLimit) {
        execute();
      } else {
        this.queue.push(execute);
      }
    });
  }

  async enqueue(task) {
    return this.runTask(task);
  }

  dequeue() {
    if (this.queue.length > 0 && this.runningCount < this.concurrencyLimit) {
      const nextTask = this.queue.shift();
      nextTask();
    }
  }
}
const concurrencyLimit = 2;
const taskQueue = new TaskQueue(concurrencyLimit);
function simulateTask(taskId, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Task ${taskId} completed`);
      resolve(`Task ${taskId} result`);
    }, delay);
  });
}

async function main() {
  for (let i = 1; i <= 5; i++) {
    const taskId = i;
    const taskDelay = 1000 * i;
    const task = () => simulateTask(taskId, taskDelay);
    taskQueue.enqueue(task).then((result) => {
      console.log(`Result for Task ${taskId}: ${result}`);
    });
  }
}

main();
