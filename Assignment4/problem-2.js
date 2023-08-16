// 2.Write a program to reverse a string ("Hello John" => "olleH nhoJ")
let str=prompt("Enter Input String: ") ;
let i=str.length-1 ;
let ans="" ;
while(i>=0){
    ans+=str[i] ; //concateing the string from last index
    i-- ;
}
console.log(ans) ;