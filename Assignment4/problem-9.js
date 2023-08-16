// 9. Write a program to find the last duplicate index in an array
let size =parseInt(prompt("Enter the size of Array: ")) ;
let arr=[] ;
for(let i=0;i<size;i++){
  arr[i]=parseInt(prompt(`Enter the ${i+1}th Element of Array: `)) ;
}
let mapu =new Map() ;

for(let i=0;i<size;i++){
    mapu.set(arr[i],i) ;
}

mapu.forEach((element,index) => {
    console.log("last index of ", element ," is " ,index) ;
});