// 3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. Override the farewell() method to include information about what the teacher teaches.
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
class Teacher extends Person{
    constructor(name,age,gender,interests,subjectsTaught){
        super(name,age,gender,interests) ;
        this.subjectsTaught=subjectsTaught ;
    }

    fareWell(){
        return `We teach ${this.subjectsTaught} subject` ;
    }
}

const  mohan =new Teacher("kaushal",22,"Male","Playing Cricket","Physics") ; // creating the object name of mohan  from teacher class
console.log(mohan.fareWell()) ;