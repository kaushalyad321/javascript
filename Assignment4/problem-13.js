// 13. Write a program to return inverse of an array
let size = parseInt(prompt("Enter the size of Array: ")) ;
let arr=[] ;
for(let i=0;i<size;i++){
    arr[i]=parseInt(prompt(`Enter ${i+1}th Element of Array`)) ;
}
for(let i=0;i<size;i++){
    arr[arr[i]]=i ; 
}
console.log(arr) ;


