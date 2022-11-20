'use strict';

const defaultOption = document.querySelector('.default_option');
const toggleThemeOptions = document.querySelector('.select_ul');
const iconRotate = document.querySelector('.icon');
const selectOption = document.querySelectorAll('.option input');
const heroImage = document.querySelector('.hero_image-section');
const confirmPassword = document.querySelector('#confirm-password');
const passwordInfo = document.querySelector('.password_info');
const root = document.documentElement;
root.className = 'dark-red';

const password = document.querySelector("#password");
const letter = document.querySelector("#letter");
const capital = document.querySelector("#capital");
const number = document.querySelector("#number");
const length = document.querySelector("#length");

const submit = document.querySelector('.submit_btn');


const togglePassword = document.querySelector('#togglePassword');
const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');

togglePassword.addEventListener('click', setPasswordVisibility);
toggleConfirmPassword.addEventListener('click', setConfirmPassVisibility);

function setPasswordVisibility() {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('bi-eye');
}

function setConfirmPassVisibility() {
    const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPassword.setAttribute('type', type);
    this.classList.toggle('bi-eye');
}



// Validate the 2 passwords when user leave the confirm password field
function validatePassword() {
    const error = document.querySelector(".password_error");
    if(password.value !== confirmPassword.value){
        error.style.display = 'flex'
        submit.disabled = true;
    }else submit.disabled = false;
  }
confirmPassword.onblur = validatePassword;

  confirmPassword.onfocus = function() {
    const error = document.querySelector(".password_error");
    error.style.display = 'none';
    confirmPassword.value = '';
}

// When the user starts to type something inside the password field
password.onkeyup = () => {
    let lowerCaseLetters = /[a-z]/;
    let upperCaseLetters = /[A-Z]/;
    let numbers = /[0-9]/;
    //validate lowercase letters
    if(password.value.match(lowerCaseLetters)) {
        letter.classList.remove('invalid');
        letter.classList.add('valid');
    } else {
        letter.classList.remove('valid');
        letter.classList.add('invalid');
    }

    // Validate uppercase letters
    if(password.value.match(upperCaseLetters)) {
        capital.classList.remove('invalid');
        capital.classList.add('valid');
    } else {
        capital.classList.remove('valid');
        capital.classList.add('invalid');
    }

    // Validate numbers
    if(password.value.match(numbers)) {
        number.classList.remove('invalid');
        number.classList.add('valid');
    } else {
        number.classList.remove('valid');
        number.classList.add('invalid');
    }

    //validate if minimum length of 8
    if(password.value.length >= 8) {
        length.classList.remove('invalid');
        length.classList.add('valid');
    } else {
        length.classList.remove('valid');
        length.classList.add('invalid');
    }
}

// open drop menu
defaultOption.addEventListener('click', () => {
    toggleThemeOptions.classList.toggle('active');
    defaultOption.classList.toggle('bg_color');
    iconRotate.classList.toggle('icon_rotate');
});

//Changing root selected theme
function setTheme(ele) {
    root.className = ele
}

selectOption.forEach(input => input.addEventListener('click', () =>{
    toggleThemeOptions.classList.toggle('active');
    iconRotate.classList.toggle('icon_rotate');
    setTheme(input.id);
}));

submit.addEventListener('click', () => {
        const error = document.querySelector(".password_error");
        if(password.value !== confirmPassword.value){
            error.style.display = 'flex'
        }
})


//I'm using "click" but it works with any event
document.addEventListener('click', function(event) {
    const isClickInside = defaultOption.contains(event.target);
    if (isClickInside) {
        return
    } else {
      toggleThemeOptions.classList.remove('active');
      iconRotate.classList.remove('icon_rotate');
    }
  });