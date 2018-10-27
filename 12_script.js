/*
  Math Object Examples

     */

// Math PI and Sqrt
var pi = Math.PI;
console.log(pi);

var sqrt = Math.sqrt(144);
console.log('sqrt of 144 : ' + sqrt);

// find the min of 4 numbers
var min = Math.min(10,45,78,95,65,65,656,56,8978,435,48,49,4361,63);
console.log('Min : ' + min);

// find the Max of 4 numbers
var max = Math.max(10,45,78,95,65,65,656,56,8978,435,48,49,4361,63);
console.log('Max : ' + max);

// find the 'x' to the power of 'y' value, ex: 2^4
var pow = Math.pow(2,4);
console.log('2 ^ 4 is : '  + pow);

// generate the random numbers from 0 to 100000
var random = Math.round(Math.random() * 100000);
document.getElementById('display').textContent =
                                        random.toString();


/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/*
    Date Object Examples

 */

// get today's date
var today = new Date();
console.log(today);

// get proper date
var date = today.getDate() + '/' +
            (today.getMonth() + 1) + '/' +
            today.getFullYear();
console.log(date);


// get full day of the week using switch statement


// Display a Digital Clock on the web page
function digitalClock() {
    var today = new Date();
    var options = {timeZone : 'Asia/Kolkata'};
    var time = today.toLocaleTimeString('en-US',options);
    document.getElementById('clock').textContent = time;
}
setInterval(digitalClock,1000);

/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/