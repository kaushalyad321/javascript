// 6. Write a program to find sum of an array
let sum = 0 ;
let size = parseInt(prompt("Enter the size of Array: ")) ;
let arr=[] ;
for(let i=0;i<size;i++){
    arr[i]=parseInt(prompt(`Enter the ${i+1}th element of Array`)) ;
}

for(let i=0;i<size;i++){
    sum+=arr[i] ;
}
console.log(sum) ;