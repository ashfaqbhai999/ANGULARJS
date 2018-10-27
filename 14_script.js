// Block scoping for FOR loop
for(var i=0; i<=10; i++){

}
console.log(i); // 11

//Block scoping for if Block
var course = 'MPC';
if(course === 'MPC'){
    var dept = 'Engineering';
}
console.log(dept); // Engineering

// Function Scoping
function allocateDept() {
    if(course === 'MPC'){
        var dept1 = 'Engineering';
    }
}
console.log(dept1); // Error , cannot access

// coding exercises

// 1) output ? ANS : Nothing

var top = 20;
function something() {
    var inner = 30;
    console.log(inner);
}

// 2) output ? ANS : 30
var top = 20;
function something() {
    var inner = 30;
    console.log(inner);
}
something();

// 3) output ?
var top = 20;
var inner = 50;
function something() {
    var inner = 30;
    console.log(inner);
}
something();

// 4) output ? ANS: 50

var top = 20;
var inner = 50;
function something() {
    var inner = 30;
}
something();
console.log(inner);

// 6) output ? ANS: Hello John
var name = "Naveen";
function greet(name) {
    console.log("Hello " + name);
}
greet("John");

//  IIFE example
(function() {
    console.log('Iam from IIFE Dude!!');
})();

// Read and Write Operations for variables


// Read and Write Operations for Functions


// Implications of Read and Write Operations

