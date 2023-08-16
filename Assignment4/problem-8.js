// 8. Write a program to remove dupliacte elements from an array
let size=parseInt(prompt("Enter the size of Array: ")) ;
let arr=[] ;
for(let i=0;i<size;i++){
    arr[i]=parseInt(prompt(`Enter the ${i+1}th element of Array `)) ;
}
let setu = new Set() ;
for(let i=0;i<size;i++){
    setu.add(arr[i]) ;
}
let ans=[] ;
setu.forEach((item)=>{
  ans.push(item) ;
}) ;
console.log(ans) ;