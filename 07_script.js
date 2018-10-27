// Assignment operator =
var age = 30;
console.log('age : ' + age);

// Arithmetic operators + - * /
var a = 10;
var b = 20;
var sum = a + b;
console.log('The Sum of a, b is : ' + sum);

// Short hand math += , -= , *= , /=
var p = 10;
var q = 20;
var add = 0;
add = add + (p + q);
add += (p + q); // shorthand math
console.log('add : ' + add);// 60

// Conditional operators < , > , <= , >= , !=
age = 25;
if(age <= 18){
    console.log('You Are Minor');
}
else{
    console.log('You Are Major');
}

// Unary Operator ++ , -- (pre , post)
var x = 10;
x = x + 1;
x += 1;
x++;
console.log('x value : ' + x);

// Logical operators AND , OR
var inRelation = true;
var parentsAgreed = false;
if(inRelation && parentsAgreed){
    console.log('Get Marry Soon');
}
else{
    console.log('Wait until the Parents Agreed');
}

// String Concatenation Operator (+)
var sc = 1 + "2" + 2 + 1;
console.log("sc : " + sc);

// Ternary operator (? :)
age = 25;
(age <= 18)? console.log('You are Minor') : console.log('You are Major');

// Type of operator
var abc;
console.log('value : ' + abc + ' DataType : ' + typeof abc);

abc = 10;
console.log('value : ' + abc + ' DataType : ' + typeof abc);

abc = 'test';
console.log('value : ' + abc + ' DataType : ' + typeof abc);

abc = true;
console.log('value : ' + abc + ' DataType : ' + typeof abc);

abc = null;
console.log('value : ' + abc + ' DataType : ' + typeof abc);

// == operator
a = 10;
b = "10";
if(a == b){
    console.log('Both Are Equal');
}
else{
    console.log('Both Are NOT Equal');
}

// === operator
a = 10;
b = "10";
if(a === b){
    console.log('Both Are Equal');
}
else{
    console.log('Both Are NOT Equal');
}