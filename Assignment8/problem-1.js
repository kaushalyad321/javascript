// Find Error in below questions and rectify them

// 1. let myArray = [1, 2, 3, 4];
// for (let i = 0; i <= myArray.length; i++) {
//    console.log(myArray[i]);
// }

//  i index starting from 0 to 4 at index 4 nothing is present 
let myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) { // need to remove equality
   console.log(myArray[i]);
}