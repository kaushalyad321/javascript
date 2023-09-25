// 6. Implement a function that returns a resolved Promise after a specified delay using async/await.
function waitforme(millisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, millisec);
    })
}
  
async function printy() {
    for (let i = 0; i < 10; ++i) {
        await waitforme(3000); // delaying 3 sec after each iteration
        console.log(i);
    }
    console.log("Loop execution finished!)");
}
  
printy();