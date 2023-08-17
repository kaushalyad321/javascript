// 2. Write a program to sort an array of object on the basis of age ({name:"John", age:26})
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
        age:16

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
        age:20

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
        age:29

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
        age:32

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
        age:42

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
        age:55

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
        age:76

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
        age:57
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
        age:20
    }


] ;
// deaclaring function for sorting Array of Object
function sortArrayOfObject(arrOfObj){
 arrOfObj.sort((a,b)=> a.age-b.age) ; // Ascending Order Sorting on the basis of age
 return arrOfObj;
}
console.log(sortArrayOfObject(arrOfObj)) ;