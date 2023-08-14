//1. Write a program to give a random output between 1 to 10 (AC: 2 simultaneous answers could not be same)
/*console.log(Math.floor(Math.random()*10+1)) ;*/
//2. Write a program to take input(age, name, phone no.) from user and display it
/*let name=prompt("please enter your name") ;
let age=prompt("please enter your age") ;
let phone_no= prompt("please enter your phone No") ;
console.log(`Hi! ${name} your age is ${age} and your phone no is ${phone_no}`) ;*/
//3. Write a function expression that takes in another function as an argument

/*function name(){
    return ("Hi my name is Kaushal Kumar Yadav") ;
}

function call(name){
  console.log(name()) ;
}

call(name) ;*/
//4. Write a function expression that takes in a number and returns its square.

/*let input =prompt("Enter Number: ") ;
let ans=input*input ;
console.log(`Square of the Number ${input} is ${ans}`) ;*/
//5. Write a function expression that takes in two numbers and returns their sum.
/*let a=parseInt(prompt("Enter First Number: "));
let b=parseInt(prompt("Enter Second Number: "));
let c =a+b ;
console.log(`Sum of the Number ${a} and ${b} is ${c}` ) ;*/
//6. Write a function expression that takes in a number and returns true if it's even and false if it's odd.

/*function check(number){
    if(number%2==0) return true ;
    return false ;
}

let number =parseInt(prompt("Enter Number :")) ;
check(number) ;*/
//7. All of the above questions from 3-6 needs to be done with arrow functions also
/* 3.let  name=()=>{
    return ("Hi my name is Kaushal Kumar Yadav") ;
}

let  call=(name)=>{
  console.log(name()) ;
}

call(name) ;*/
/* 4.

let input =prompt("Enter Number: ") ;
let ans=(input)=>{

  return (input*input) ;

}
let ans2=ans(input) ;
console.log(`Square of the Number ${input} is ${ans2}`) ;

*/

/* 5.
let a=parseInt(prompt("Enter First Number: "));
let b=parseInt(prompt("Enter Second Number: "));
let c =(a,b)=>{
    return a+b ;
}
const an = c(a,b) ;
console.log(`Sum of the Number ${a} and ${b} is ${an}` ) ;


*/

/*
6.
const check=(number)=>{
    if(number%2==0) return true ;
    return false ;
}

let number =parseInt(prompt("Enter Number :")) ;
check(number) ;


*/








