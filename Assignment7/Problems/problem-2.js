// 2. Give an example of using multiple callback functions in a single function in JavaScript
const function1 = (callback1, callback2, callback3) => {// function1 taking callback1 , callback2 , callback3 as a argument 
    setTimeout(() => {
      console.log("function 1 timed out!");
      callback1(callback2, callback3);//callback1 function taking callback2 and callback3 as arguments
    }, 1500);
  }
  
 const  function2 = (callback1, callback2) => {
    setTimeout(() => {
      console.log("function 2 timed out!");
      callback1(callback2); // callback1 function taking callback2 as an argument 
    }, 2000);
  }
  
  const function3 = (callback1) => {
    setTimeout(() => {
      console.log("function 3 timed out!")
      callback1() // this callback1 function is not taking any argument
    }, 3000);
  }
  
 const function4 = () => {
    setTimeout(() => {
      console.log("function 4 timed out!")
    }, 4000);
  }
  
  function1(function2, function3, function4);