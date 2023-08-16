// 5. Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)
let str = prompt("Enter String Input: ") ;
function toCamelCase(str){
    let newStr = "";
    if(str){
      let wordArr = str.split(/[-_ ]/g);
      for (let i in wordArr){
        if(i > 0){
          newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
        }else{
          newStr += wordArr[i]
        }
      }
    }else{
      return newStr ;
    }
    return newStr;
  }

  let ans = toCamelCase(str) ;
  console.log(ans) ;