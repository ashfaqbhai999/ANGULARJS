// Get the form fields

var userBox = document.querySelector('#username');
var emailBox = document.querySelector('#email');
var passwordBox = document.querySelector('#password');
var confirmPasswordBox = document.
                        querySelector('#password_confirm');

// Get the Error Messages

var userError = document.querySelector('#name_error');
var emailError = document.querySelector('#email_error');
var passwordError = document.querySelector('#password_error');

// Add Event Listeners
userBox.addEventListener('blur',userVerify);
emailBox.addEventListener('blur',emailVerify);
passwordBox.addEventListener('blur',passwordVerify);
confirmPasswordBox.addEventListener('blur',confirmPasswordVerify);


// validate function
function validate() {
    var result = true;

    // Required UserName validation
    if(userBox.value === ''){
        userBox.style.borderColor = 'red';
        userBox.style.backgroundColor = '#FF998B';
        userError.textContent = 'UserName Required';
        userError.style.color = 'red';
        result = false;
        return result;
    }

    // UserName Length validation
    if(userBox.value.length < 5){
        userBox.style.borderColor = 'red';
        userBox.style.backgroundColor = '#FF998B';
        userError.textContent = 'Enter at least 5 letters';
        userError.style.color = 'red';
        result = false;
        return result;
    }

    // Required Email validation
    if(emailBox.value === ''){
        emailBox.style.borderColor = 'red';
        emailBox.style.backgroundColor = '#FF998B';
        emailError.textContent = 'Email Required';
        emailError.style.color = 'red';
        result = false;
        return result;
    }

    // Required Password Validation
    if(passwordBox.value === ''){
        passwordBox.style.borderColor = 'red';
        passwordBox.style.backgroundColor = '#FF998B';
        passwordError.textContent = 'Password Required';
        passwordError.style.color = 'red';
        result = false;
        return result;
    }

    // Required confirm Password validation
    if(confirmPasswordBox.value === ''){
        confirmPasswordBox.style.borderColor = 'red';
        confirmPasswordBox.style.backgroundColor = '#FF998B';
        passwordError.textContent = 'Confirm Password Required';
        passwordError.style.color = 'red';
        result = false;
        return result;
    }

    // Password Match Validation
    if(passwordBox.value !== confirmPasswordBox.value){
        passwordBox.style.borderColor = 'red';
        confirmPasswordBox.style.borderColor = 'red';
        passwordBox.style.backgroundColor = '#FF998B';
        confirmPasswordBox.style.backgroundColor = '#FF998B';
        passwordError.textContent = "Passwords Didn't Match";
        passwordError.style.color = 'red';
        result = false;
        return result;
    }

    if(result === false){
        return false;
    }
    else{
        alert('Form Submitted Successfully !!');
    }
}

// UserBox Blur Event
function userVerify() {
    userBox.style.borderColor = 'gray';
    userBox.style.backgroundColor = 'white';
    userError.textContent = '';
}
// EmailBox Blur Event
function emailVerify() {
    emailBox.style.borderColor = 'gray';
    emailBox.style.backgroundColor = 'white';
    emailError.textContent = '';
}
// PasswordBox Blur Event
function passwordVerify() {
    passwordBox.style.borderColor = 'gray';
    passwordBox.style.backgroundColor = 'white';
    confirmPasswordBox.style.borderColor = 'gray';
    confirmPasswordBox.style.backgroundColor = 'white';
    passwordError.textContent = '';
}
// ConfirmPasswordBox Blur Event
function confirmPasswordVerify() {
    passwordBox.style.borderColor = 'gray';
    passwordBox.style.backgroundColor = 'white';
    confirmPasswordBox.style.backgroundColor = 'white';
    confirmPasswordBox.style.borderColor = 'gray';
    passwordError.textContent  = '';
}

