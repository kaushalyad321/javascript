// 1. Write a program to iterate over object.
const obj={

    name:"Kaushal Kumar Yadav",

    mobileNo :8797196867,
    fatherName :"Tribhuvan Yadav",
    motherName : "Ramu devi",
    villName : "Bengatol" ,
    postOffice : "Mahtha" ,
    policeStation : "Ladania",
    pinCode :847232 
}

for (let key in obj) { // using for loop for iterating object

    console.log(key,':', obj[key]);

  }
let i=0 ;
let keys=Object.keys(obj) ;

keys.forEach(element => {
    console.log(element,":", obj[element]) ;// using forEach for itearting object
});
   

