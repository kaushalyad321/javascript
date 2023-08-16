function interSection(arr1,arr2){
    let set1=new Set() ;
    let set2=new Set() ;
    let ans=[] ;
    for(let i=0;i<arr1.length;i++){
        set1.add(arr1[i]) ; // making set from arr1
    }
    for(let i=0;i<arr2.length;i++){
        set2.add(arr2[i]) ; // making set from arr2
    }
    for (const x of set1) {
        
        if(set2.has(x)===true){
            ans.push(x) ; // element of set1 is present in set2 then adding the value in array
        }

      }

      return ans ;
}
