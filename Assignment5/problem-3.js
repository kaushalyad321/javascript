// 3. Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})
//created array of object
let arrOfObj=[
    {
        name:"Subham Kumar Yadav",
        mobileNo :8797196867,
        fatherName :"Tribhuvan Yadav",
        motherName : "Ramu devi",
        villName : "Bengatol" ,
        postOffice : "Mahtha" ,
        policeStation : "Ladania",
        pinCode :847232 ,
        age:16,
        id:1 

    },
    {
        name:"Saurav Kumar Yadav",
        mobileNo :8797196867,
        fatherName :"Tribhuvan Yadav",
        motherName : "Ramu devi",
        villName : "Bengatol" ,
        postOffice : "Mahtha" ,
        policeStation : "Ladania",
        pinCode :847232 ,
        age:20 ,
        id:2


    }
    ,
    {
        name:"Lala Kumar Yadav",
        mobileNo :8797196867,
        fatherName :"Tribhuvan Yadav",
        motherName : "Ramu devi",
        villName : "Bengatol" ,
        postOffice : "Mahtha" ,
        policeStation : "Ladania",
        pinCode :847232 ,
        age:29 ,
        id:3 


    },
    {
        name:"Pepe Kumar Yadav",
        mobileNo :8797196867,
        fatherName :"Tribhuvan Yadav",
        motherName : "Ramu devi",
        villName : "Bengatol" ,
        postOffice : "Mahtha" ,
        policeStation : "Ladania",
        pinCode :847232 ,
        age:32 ,
        id:4


    },
    {
        name:"Panju Kumar Yadav",
        mobileNo :8797196867,
        fatherName :"Tribhuvan Yadav",
        motherName : "Ramu devi",
        villName : "Bengatol" ,
        postOffice : "Mahtha" ,
        policeStation : "Ladania",
        pinCode :847232 ,
        age:42 ,
        id:5 


    },
    {
        name:"Ganju Kumar Yadav",
        mobileNo :8797196867,
        fatherName :"Tribhuvan Yadav",
        motherName : "Ramu devi",
        villName : "Bengatol" ,
        postOffice : "Mahtha" ,
        policeStation : "Ladania",
        pinCode :847232 ,
        age:55 ,
        id:6 


    },
    {
        name:"Mohit Kumar Yadav",
        mobileNo :8797196867,
        fatherName :"Tribhuvan Yadav",
        motherName : "Ramu devi",
        villName : "Bengatol" ,
        postOffice : "Mahtha" ,
        policeStation : "Ladania",
        pinCode :847232 ,
        age:76 ,
        id:7


    },
    {
        name:"Sona Kumar Yadav",
        mobileNo :8797196867,
        fatherName :"Tribhuvan Yadav",
        motherName : "Ramu devi",
        villName : "Bengatol" ,
        postOffice : "Mahtha" ,
        policeStation : "Ladania",
        pinCode :847232 ,
        age:57 ,
        id:8

    },
    {
        name:"Mona Kumar Yadav",
        mobileNo :8797196867,
        fatherName :"Tribhuvan Yadav",
        motherName : "Ramu devi",
        villName : "Bengatol" ,
        postOffice : "Mahtha" ,
        policeStation : "Ladania",
        pinCode :847232 ,
        age:20 ,
        id:9

    }

] ;
//iterating array of object and each object where id is present removing

function deleteKey(arrOfObj){
for(let i=0;i<arrOfObj.length;i++){
        // delete arrOfObj[i][key] ;
           delete arrOfObj[i].id; 
}
return arrOfObj ;
}
console.log(deleteKey(arrOfObj)) ;