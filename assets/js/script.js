'use strict';

const defaultOption = document.querySelector('.default_option');
const toggleThemeOptions = document.querySelector('.select_ul');
const selectIconRotate = document.querySelector('.icon');
const selectOption = document.querySelectorAll('.option input');
const heroImage = document.querySelector('.hero_image-section');
const passwordInfo = document.querySelector('.password_info');
const root = document.documentElement;
root.className = 'dark-red';

const confirmPassword = document.querySelector('#confirm-password');
const password = document.querySelector("#password");
const letter = document.querySelector("#letter");
const capital = document.querySelector("#capital");
const number = document.querySelector("#number");
const length = document.querySelector("#length");

const submitBTN = document.querySelector('.submit_btn');
const modalBTN = document.querySelector('.modal_BTN');
const modal = document.querySelector('.modal');

modalBTN.addEventListener('click', () => {
    modal.style.display = 'none';
    window.location.reload();
})

const togglePassword = document.querySelector('#togglePassword');
const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');

togglePassword.addEventListener('click', setPasswordVisibility);
toggleConfirmPassword.addEventListener('click', setConfirmPassVisibility);

//**** Toggle password visibility and changing the icon **** */
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
/* ************************************************************************* */


// **** Validate the 2 passwords when user leave the confirm password field ****
function validatePassword() {
    const error = document.querySelector(".password_error");
    if(password.value !== confirmPassword.value){
        error.style.display = 'flex'
        submitBTN.disabled = true;
    }else submitBTN.disabled = false;
  }
confirmPassword.onblur = validatePassword;

  confirmPassword.onfocus = function() {
    const error = document.querySelector(".password_error");
    error.style.display = 'none';
}
/* ****************************************************************************** */

// **** validating password requirements while the user is typing ****
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
/* ***************************************************************************** */

// **** opening the select theme options and selecting the themes ****
defaultOption.addEventListener('click', () => {
    toggleThemeOptions.classList.toggle('active');
    defaultOption.classList.toggle('bg_color');
    selectIconRotate.classList.toggle('icon_rotate');
});

//Changing root selected theme
function setTheme(ele) {
    root.className = ele
}

selectOption.forEach(input => input.addEventListener('click', () =>{
    toggleThemeOptions.classList.toggle('active');
    selectIconRotate.classList.toggle('icon_rotate');
    setTheme(input.id);
}));
/* ******************************************************************************** */

// **** closing the theme selection if the user click outside the selection
//without selecting a theme. ****
// **** This works with any event ****
document.addEventListener('click', function(event) {
    const isClickInside = defaultOption.contains(event.target);
    if (isClickInside) {
        return
    } else {
      toggleThemeOptions.classList.remove('active');
      selectIconRotate.classList.remove('icon_rotate');
    }
  });

// opening modal after submitting a form after validation
  (function() {
    'use strict';
    window.addEventListener('load', function() {
// Fetch all the forms we want to apply custom Bootstrap validation styles to
        let forms = document.getElementsByClassName('needs_validation');
// Loop over them and prevent submission
        let validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    return false;
                } else {
                    modal.style.display = 'flex'
                }
            }, false);
        });
    }, false);
})();

  /* END, Follow me on instagram @fabioauroradev, to follow my learning journey */