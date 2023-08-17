// 4. Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.
let originalObj={
    name:"Kaushal Kumar Yadav",
    mobileNo :8797196867,
    fatherName :"Tribhuvan Yadav",
    motherName : "Ramu devi",
    villName : "Bengatol" ,
    postOffice : "Mahtha" ,
    policeStation : "Ladania",
    pinCode :847232 
}

let coppiedObj ={} ;
coppiedObj=originalObj ;
Object.assign(coppiedObj,originalObj) ;// making copy of originalObj using assign function
console.log(originalObj) ;
console.log(coppiedObj) ;

