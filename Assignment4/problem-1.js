// 1. Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")
let s=prompt("Enter the Input String: ") ;
function removeDups(s) {
    let charArray = s.split("");
      for (let i = 0; i < charArray.length; i++) {
        for (let j = i + 1; j < charArray.length; j++)
          if (charArray[i] == charArray[j]) {
            charArray.splice(j, 1);
            j--;
          }
      }
      return charArray.join("");
    }
s=removeDups(s);
console.log(s) ;