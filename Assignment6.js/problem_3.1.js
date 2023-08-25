// 3.1 Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.
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
let ram=new Person("kaushal",22,"Male","Playing Cricket") ; // creating object ram from Person
console.log(ram.greeting()) ;
console.log(ram.fareWell()) ;