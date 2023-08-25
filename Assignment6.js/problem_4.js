// 4. Create aclass called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called `fullName` that returns the person's full name.
// Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.
class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName ;
        this.lastName=lastName ;
        this.age=age ;  
    }
    
    fullName(){
         return this.firstName + " " + this.lastName ; //returning the concated the first name with last name 
    }
    averageAge(array){
        let n=array.length ; // finding the length of array of object
        let sum = 0 ;
        for(const property in array){
            sum+= array[property].age ; // traversing the object 
        }
        return (sum/n);
    }
}

const obj =[{age:20},{age:30},{age:33},{age:25}] ;
const ram = new Person("kaushal","Yadav","age") ; // creating object of Person
console.log(ram.averageAge(obj)); // 
