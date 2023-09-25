// 6. var person = { name: "John Doe", age: 30, getDetails: function() { console.log(this.name + " is " + this.age + " years old"); } };
// var getPersonDetails = person.getDetails;
// getPersonDetails();
var person = { 
    name: "John Doe", 
    age: 30, 
    getDetails: function() {
        console.log(person.name + " is " + person.age + " years old");  // this is object so we can not initilize the value using this
    }
};
var getPersonDetails = person.getDetails;
getPersonDetails();