function reverseArray(arr){
    let i=0 ,j=arr.length -1 ;
    while(i<=j){
     let m=arr[i] ;
     arr[i]=arr[j] ;//swapping ith and jth index element
     arr[j]=m ;
     i++,j-- ;
    }
   return arr ;
 }