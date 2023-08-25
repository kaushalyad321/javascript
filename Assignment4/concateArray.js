function conacatenateArray(arr){
    let ans=[] ;
    let row=arr.length ;
    for(let i=0;i<row;i++){
     for(let j=0;j<arr[i].length;j++){
         ans.push(arr[i][j]) ;
     }
    }
    return ans ;
 }