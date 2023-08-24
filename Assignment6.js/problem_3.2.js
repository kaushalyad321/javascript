// 3.2 Create a class Student that inherits from the Person class and has a property studies. Override the greeting() method to include information about what the student is studying.
class Person{
    constructor(name,age,gender,interests){
        this.name=name ;
        this.age=age ;
        this.gender=gender ;
        this.interests=interests ;
    }
    greeting(){
        return `My name is ${this.name} , age is ${this.age} , gender is ${this.gender} and interests is ${this.interests}` ;
    }
    fareWell(){
        return `Goodbye ${this.name}` ;
    }

}
class Student extends Person{
    constructor(name ,age,gender,interests,studies){
        super(name,age,gender,interests) ;
        this.studies = studies ;
    }
    greeting(){
        return  `My name is ${this.name} , age is ${this.age} , gender is ${this.gender} and interests is ${this.interests} and studying ${this.studies}` ;
     }

}

let kaushal =new Student("kaushal",22,"Male","playing Cricket","Coding") ;
console.log(kaushal.greeting()) ;