// creation of arrays
var array = [10,20,30,40,50];

// Accessing an array and its properties
console.log(array); // 10,20,30,40,50
console.log(array[0]); // 10
console.log(array[1]); // 20

// Access not existed property from an array
console.log(array[100]); // undefined

// adding properties to an array
array[5] = 60;
console.log(array);

// Accessing length of an Array
console.log('Length of the array is : ' + array.length);

// reverse the array using reverse()
array = [10,20,30,40,50];
var output = 'Before : ' + array.join(" ");
document.querySelector('#display1').textContent = output;
array.reverse();
output = 'After : ' + array.join(" ");
document.querySelector('#display2').textContent = output;


// Remove the first value of the array: shift()
array = [10,20,30,40,50];
var output = 'Before : ' + array.join(" ");
document.querySelector('#display1').textContent = output;
array.shift();
output = 'After : ' + array.join(" ");
document.querySelector('#display2').textContent = output;


// Add value to front of the array:unshift()
array = [10,20,30,40,50];
var output = 'Before : ' + array.join(" ");
document.querySelector('#display1').textContent = output;
array.unshift(60);
output = 'After : ' + array.join(" ");
document.querySelector('#display2').textContent = output;

// Remove the last value of the array: pop()
array = [10,20,30,40,50];
var output = 'Before : ' + array.join(" ");
document.querySelector('#display1').textContent = output;
array.pop();
output = 'After : ' + array.join(" ");
document.querySelector('#display2').textContent = output;

// Add value the end of the array: push()
array = [10,20,30,40,50];
var output = 'Before : ' + array.join(" ");
document.querySelector('#display1').textContent = output;
array.push(60);
output = 'After : ' + array.join(" ");
document.querySelector('#display2').textContent = output;

// Remove an element from an Array , Arguments: colors.splice(pos,n):
array = [10,20,30,40,50];
var output = 'Before : ' + array.join(" ");
document.querySelector('#display1').textContent = output;
array.splice(3,2); // 40 , 50
output = 'After : ' + array.join(" ");
document.querySelector('#display2').textContent = output;

// Create a copy of an array. Typically assigned to a new variable:slice();
var arr1 = [10,20,30,40,50];
var arr2 = arr1.slice();
if(arr1 === arr2){
    console.log('Both Are Equal');
}
else{
    console.log('Both Are NOt Equal');
}

// indexOf()
arr1 = [10,20,30,40,50];
console.log('value : ' + arr1[0]); // 10
console.log('index : ' + arr1.indexOf(10)); //0

// Join()
arr1 = [10,20,30,40,50];
document.querySelector('#display1').textContent = arr1.join(' * ');

// Prove an array is an Object
arr1 = [10,20,30,40,50];
console.log(arr1);

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
