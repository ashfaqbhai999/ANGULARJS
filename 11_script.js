//creation of a simple function with no args and execute a function
function greet() { // function definition
    console.log('Welcome to JS Functions');
}
greet();

//creation of a simple function with args
function greetArgs(name) {
    console.log('Hello ' + name + ' Good Morning ');
}
greetArgs('John');

// executing a function with less number of params
function greetLessArgs(name,age) {
    console.log('Hello ' + name + ' You are ' + age + ' Years Old!!');
}
greetLessArgs('John');

//executing a function with more number of params
function greetMoreArgs(name,age) {
    console.log('Hello ' + name + ' You are ' + age + ' Years Old!!');
}
greetMoreArgs('John',35,'Manager');

//function overloading is not possible here


// functions with return values
function greetReturn(name) {
    return 'Good Morning ' + name;
}

var greeting = greetReturn('John');
console.log(greeting);

//function with empty return /no return
function greetEmptyReturn(name) {
    var greeting = "Good Morning " + name;
}
greeting = greetEmptyReturn('Williams');
console.log(greeting);

// function Expressions with name and execution
var greetFn = function greetMe() {
    console.log('Iam from greetFn Function');
};
greetFn();

// Anonymous Function Expression and execution
var anonymousFn = function() {
  console.log('Iam from Anonymous Function Expression');
};
anonymousFn();

// Functions as arguments without args
function greet1(name) {
    console.log('Iam from greet1 ' + name);
}
function greet2(name) {
    console.log('Iam from greet2 ' + name);
}
function greetEngine(fName,name) {
    fName(name);
}
greetEngine(greet2,'John');
greetEngine(greet1,'Williams');

// Functions in Objects and Execution
var student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : function() {
        console.log(this.firstName + " " + this.lastName);
    }
};
student.fullName();


// Coding Exercise 1
/*
Create an employee obj and address object in it. add a property called
isFromState() to return true if a person from that state.
 */

var employee = {
    name : 'John',
    age : 40,
    desg : 'Manager',
    address : {
        city : 'Hyderabad',
        state : 'Telangana',
        country : 'India'
    },
    isFromState : function(state) {
        return(state === this.address.state);
    }
};
console.log('is From Telangana ? '
    + employee.isFromState('Telangana'));

// Default Function Arguments (arguments)
function defaultArgs() {
    console.log(arguments);
}
defaultArgs('John',40,'Manager');
