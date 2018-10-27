// get the numberBox
var numberBox = document.querySelector('#selectedNumber');
var displayMsgBox = document.querySelector('#display-msg');
var numbers = ['ZERO' , 'ONE' , 'TWO' , 'THREE' , 'FOUR' , 'FIVE' , 'SIX' , 'SEVEN' , 'EIGHT' , 'NINE'];

// Hookup Event Listener
numberBox.addEventListener('keyup',displayMessage);

// Function Logic
function displayMessage() {
    var numberString = '';
    var enteredNumber = numberBox.value.trim();
    for(var i=0; i<enteredNumber.length; i++){
        console.log(enteredNumber.charAt(i) + " " + typeof enteredNumber.charAt(i));
        if(enteredNumber.charAt(i) === '.'){
            numberString += ' . ';
        }
        else{
            var char = parseInt(enteredNumber.charAt(i));
            numberString += numbers[char] + ' ';
        }

    }
    displayMsgBox.textContent = numberString;
}