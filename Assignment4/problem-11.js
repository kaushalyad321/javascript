// 11. Write a program to sort an array (bubble sort)
import {bubbleSort} from './bubbleSort.js' ;
let size =parseInt(prompt("Enter the size of Array: ")) ;
let arr=[] ;
for(let i=0;i<size;i++){
    arr[i]=parseInt(prompt(`Enter the ${i+1} th Element of Array: `)) ;
}

arr = bubbleSort(arr) ;
console.log(arr) ;