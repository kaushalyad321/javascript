// 3. Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")
 let mapu ={} ;
 let str="ababababa" ;
 
 for(let i=0;i<str.length;i++){
    mapu[str[i]]++ ;
 }

 let ans = "";
mapu.forEach (function(value, key) {
  ans += key +  value ;
})

console.log(ans) ;

