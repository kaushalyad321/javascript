// 7. Write a program to find index of duplicate elements in an array
let size=parseInt(prompt("Enter the size of Array: ")) ;
let arr=[] ;
for(let i=0;i<size;i++){
    arr[i]=parseInt(prompt(`Enter the ${i+1}the Element of Array`)) ;
}

let arrset=[... new Set(arr)];
let ans="";
for(let i=0;i<arrset.length;i++){
    let currentelement=arrset[i];
    ans+=(arrset[i]+" : ");
    let count=0;
    for(let j=0;j<arr.length;j++){
        if(arr[j]===currentelement){
            count++;
            if(count>1) ans+=(j + ' ');
        }
    }
    ans+="\n";
}
console.log(ans);