// 10. Write a program to concatenate an input of array of arrays
import {conacatenateArray} from './concateArray' ;
let row =parseInt(prompt("Enter the size of matrix: ")) ;
let arr =[[]];
for(let i=0;i<row;i++){

let column =parseInt(prompt(`Enter the ${i+1} column size `)) ;
for(let j=0;j<column;j++){
    arr[i][j]=parseInt(prompt(`Enter the ${i+1}the row and ${j+1}th column element :`)) ;
}

}

console.log(conacatenateArray(arr)) ;

