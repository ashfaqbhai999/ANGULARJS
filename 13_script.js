//BOM Operations

// width of the browser
var width = window.innerWidth;
console.log('Width of the browser is ' + width + 'px');

// Open a new Tab
//window.open();

// Print the current Doc
//window.print();


// DOM Properties to get body , title , URL

var body = document.body;
console.log(body);

var title = document.title;
console.log(title);

var url = document.URL;
console.log(url);


//DOM Methods
//document.getElementById();
//document.getElementsByClassName();
//document.getElementsByTagName();
//document.querySelector();
//document.querySelectorAll();

var paragraph = document.getElementById('para');
paragraph.style.color = 'red';
paragraph.style.fontSize = '50px';
paragraph.style.fontWeight = 'bold';


var heading = document.querySelector('h2');
heading.textContent = '7:30 PM Batch';
heading.style.color = 'white';
heading.style.backgroundColor = 'forestgreen';

var formDiv = document.querySelector('#form-div');
formDiv.style.backgroundColor = 'lightblue';
formDiv.style.margin = '10px';

var textBox = document.querySelector('#username');
textBox.style.height = ' 40px';
textBox.style.fontSize = '20px';
textBox.style.border = '1px solid gray';
textBox.style.outline = 'none';

function getUser() {
    var username = textBox.value;
    var userMsg = document.querySelector('#userMsg');
    if(username === ''){
        textBox.style.borderColor = 'gray';
        userMsg.textContent = '';
    }
    else if(username === 'naveen'){
        textBox.style.borderColor = 'green';
        userMsg.textContent = 'Valid UserName';
        userMsg.style.color = 'green';
    }
    else{
        textBox.style.borderColor = 'red';
        userMsg.textContent = 'Invalid UserName';
        userMsg.style.color = 'red';
    }
}

// Event Listeners

// get the Submit Button
var submitButton = document.querySelector('#submit');

// add an Event Listener
submitButton.addEventListener('click',validateUser);

// create a function
function validateUser() {
    var username = textBox.value;
    var userMsg = document.querySelector('#userMsg');
    if(username === ''){
        textBox.style.borderColor = 'gray';
        userMsg.textContent = '';
    }
    else if(username === 'naveen'){
        textBox.style.borderColor = 'green';
        userMsg.textContent = 'Valid UserName';
        userMsg.style.color = 'green';
    }
    else{
        textBox.style.borderColor = 'red';
        userMsg.textContent = 'Invalid UserName';
        userMsg.style.color = 'red';
    }
}



// TextBox EventLister

textBox.addEventListener('keyup',validate);

function validate() {
    var username = textBox.value;
    var userMsg = document.querySelector('#userMsg');
    if(username === ''){
        textBox.style.borderColor = 'gray';
        userMsg.textContent = '';
    }
    else if(username === 'naveen'){
        textBox.style.borderColor = 'green';
        userMsg.textContent = 'Valid UserName';
        userMsg.style.color = 'green';
    }
    else{
        textBox.style.borderColor = 'red';
        userMsg.textContent = 'Invalid UserName';
        userMsg.style.color = 'red';
    }
}






