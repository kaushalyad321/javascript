// 12. Write a program to display intersection of an array
import {interSection} from './interSection.js' ;
let size1=parseInt(prompt("Enter the size of Array1: "));
let size2=parseInt(prompt("Enter the size of Array2: "));

let arr1=[] ;
let arr2=[] ;
for(let i=0;i<size1;i++){
    arr1[i]=parseInt(prompt(`Enter the ${i+1}}th element of Array1`)) ;
}
for(let i=0;i<size2;i++){
    arr2[i]=parseInt(prompt(`Enter the ${i+1}}th element of Array2`)) ;
}
let ans = interSection(arr1,arr2) ;
console.log(ans) ;
