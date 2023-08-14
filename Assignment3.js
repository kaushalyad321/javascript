//1. Write a program to perform functionality of a calculator (add,sub,multiply,divide)
/*let input =prompt("please enter the name of operation for calculator : ") ;
if(input==="add"){

    let a=parseInt(prompt("Enter the first Number :")) ;
    let b=parseInt(prompt("Enter the second Number :")) ;
    console.log(`sum of number ${a} and ${b} is ${a+b}`) ;


}

if(input==="sub"){
    let a=parseInt(prompt("Enter the first Number :")) ;
    let b=parseInt(prompt("Enter the second Number :")) ;
    console.log(`sub of number ${a} and ${b} is ${a-b}`) ;

}

if(input==="multiply"){
    let a=parseInt(prompt("Enter the first Number :")) ;
    let b=parseInt(prompt("Enter the second Number :")) ;
    console.log(`multiply of number ${a} and ${b} is ${a*b}`) ;

}

if(input==="divide"){
    let a=parseInt(prompt("Enter the first Number :")) ;
    let b=parseInt(prompt("Enter the second Number :")) ;
    if(b===0){
        console.log("coudn't find the division") ;
    }
    else{
    console.log(`divide of number ${a} and ${b} is ${a/b}`) ;}

}*/
/*2. Write a program to display following output as shown in figure

1
2 3
4 5 6
7 8 9 10
1
2 2
3 3 3
4 4 4 4

1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5




*/

/*let str="" ;
for(let i=1;i<=4;i++){
  
    for(let j=1;j<=i;j++){
        str+=j+" " ;
    }

    str+="\n" ;
}

console.log(str) ;*/
/*let str="" ;
for(let i=1;i<=4;i++){
  
    for(let j=1;j<=i;j++){
        str+=i+" " ;
    }

    str+="\n" ;
}

console.log(str) ;*/
/*let str="" ;

for(let i=1;i<=10;i++){
if(i<=5){
   for(let j=1;j<=5-i+1;j++){
    str+=j+" " ;

   }
 str+="\n" ;
}
 else{
 
 for(let j=1;j<=i-4;j++){
    str+=j +" " ;
 }

  str+="\n" ;
 }

}

console.log(str) ;*/
/*
3. Write a program to display Diamond Pattern

        *
      *  *
    *  *  *
  *  *  *  *
*  *  *  *  *
  *  *  *  *
    *  *  *
     *  *
       *  
    */
/*let str="" ;
for (let i = 1; i <= 5; i++) {
  
  for (let j = 1; j <= 5 - i; j++) {
    str+=" ";
  }
  
  for (let k = 0; k < 2 * i - 1; k++) {
    str+="*" ;
  }
  str+="\n" ;
}


for (let i = 1; i <= 5- 1; i++) {
  
  for (let j = 0; j < i; j++) {
     str+=" " ;
  }
  
  for (let k = (5 - i) * 2 - 1; k > 0; k--) {
    str+="*" ;
  }
  str+="\n" ;
}

console.log(str) ;*/

//4. Write a program to print all even number first and then all odd numbers

 /*let n = parseInt(prompt("Enter the size of the array"));
 let arr = new Array() ;
 for(let i=0;i<n;i++){
    let a=parseInt(prompt(`Enter the ${i} th Element of an Array`)) ;
    arr[i]=a ;
 }
 let str ="" ;
 for(let i=0;i<n;i++){
    if(arr[i]%2===0){
        str+=arr[i]+" " ;
    }
 }
 for(let i=0;i<n;i++){
    if(arr[i]%2!=0){
        str+=arr[i]+" " ;
    }
 }

console.log(str) ;*/
//5. Write a program to print all even number first and then all odd numbers using only one iteration
/*let n = parseInt(prompt("Enter the size of the array"));
 let arr = new Array() ;
 for(let i=0;i<n;i++){
    let a=parseInt(prompt(`Enter the ${i} th Element of an Array`)) ;
    arr[i]=a ;
 }
let str1 ="" ;
let str2="" ;
 for(let i=0;i<n;i++){
    if(arr[i]%2===0){
        str1+=arr[i]+" " ;
    }
    else{
        str2+=arr[i]+" ";
    }

    
 }

console.log(str1+str2) ;*/
//6. Write a program to display prime numbers from 1 to 50
/*let str="" ;
for(let i=2;i<=50;i++){
    let flag=true ;
    for(let j=2;j<=Math.sqrt(i);j++){
      if(i%j===0){
        flag=false ;
      }
    }

    if(flag===true){
         str+=i+" " ;
    }
}

console.log(str) ;*/

//7. Write a program to display the twice of a number starting from 2 and end at 4096 (2, 4, 8, 16, ..... 4096)

/*let i=2 ;
let str="" ;
while(i<=4096){
    str+=i+" " ;
    i*=2 ;
}
console.log(str) ;*/

//8. Write a program to dispaly number from 1-20 using all types of loops
/*
let ans="" ;
let i=1 ;
for(i=1;i<=20;i++){
    ans+=i+" " ;
}

console.log(ans) ;
ans="" ;
i=1 ;
while(i<=20){
    ans+=i+" " ;
    i++ ;
}
let str="" ;

console.log(ans) ;
const charArr = ans.split('');
charArr.forEach(fun) ;

function fun(item){
    str+=item ;
}
console.log(str) ;
*/
//9. Write a program to print fibonaaci series

/*const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
let str="" ;
for (let i = 1; i <= number; i++) {
    str+=n1+" " ;
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
console.log(str) ; */



