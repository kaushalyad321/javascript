// 2. let myObject = { name: 'John', age: 30 };
// for (property in myObject) {
//    console.log(property + ': ' + myObject.property);
// }
let myObject = { name: 'John', age: 30 };
for (property in myObject) {
let ans=property ;
   console.log(property + ': ' + myObject[property]); // property is string value we can direct access like myObject.property
   
}

