//creation of objects , adding properties ,  retrieval
var obj = {};
obj.name = 'John';
obj.age = 35;
obj.desg = 'Manager';
console.log(obj);

//declaring Object Literals
var car = {
    model : 'Audi',
    color : 'White',
    year : 2018
};
console.log(car);

//Access existing properties
console.log('Existing : ' + car.model); // Audi
console.log('Existing : ' + car.year); // 2018

//Access Non Existing Properties
console.log('Non Existing : ' + car.mileage); // Undefined

// Usage of Dot and [] notations
console.log('Dot Notation : ' + car.color); // white
console.log('[] Notation : ' + car['color']); // white

// use of [] notation where dot is not used for invalid identifiers
var table = {
    made : 'wood',
    company : 'godrej',
    year : 2018,
    100 : 'test' // invalid
};
//console.log('Invalid Id: ' + table.100); // Cannot Access
console.log('Invalid Id : ' + table['100']);

// use of [] notation for accessing dynamic properties
var institute = {
    name : 'NareshIt',
    estd : 2003,
    location : 'Ameerpet'
};

var dynaProp = 'name';
console.log(institute[dynaProp]); // NareshIt

dynaProp = 'estd';
console.log(institute[dynaProp]); // 2003

dynaProp = 'location';
console.log(institute[dynaProp]); // Ameerpet

// nested Objects creation
var student = {
    name: 'Rajan',
    age: 21,
    course: 'Engineering',
    address: {
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India'
    }
};

//Accessing them using dot notation
console.log('City : ' + student.address.city); // Hyderabad

//Accessing them using mix of dot and [] notation
console.log('State : ' + student.address['state']); // Telangana

// Add some properties to nested object and access them
student.address.street = 'Ameerpet';
console.log(student);

// === operator demo for objects (if pointing to same location in memory)
var person1 = {
    name : 'John',
    age : 40
};

var person2 = person1;
if(person1 === person2){
    console.log('Both Are Equal');
}
else{
    console.log('Both Are NOT Equal');
}


// deleting a property from an objectc
delete student.name;
console.log(student);
