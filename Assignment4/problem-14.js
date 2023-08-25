// 14. Write a program to reverse an array
import { reverseArray} from './problem-13.js';

let size = parseInt(prompt("Enter the size of Array: ")) ;
let arr=[] ;
for(let i=0;i<size;i++){
    arr[i]=parseInt(prompt(`Enter ${i+1}th Element of Array`)) ;
}
reverseArray(arr) ;
console.log(arr) ;
