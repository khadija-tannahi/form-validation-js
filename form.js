// JavaScript Document

const states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

document.addEventListener('DOMContentLoaded', function() {

 


  const form = document.getElementById('form');
  const userNameInput = document.getElementById('userName');
  const lastNameInput = document.getElementById('lname');
  const phoneNumberInput = document.getElementById('phoneNumber');
  const addressInput = document.getElementById('address');
  const cityInput = document.getElementById('city');


  const stateInput = document.getElementById('state');

  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = 'Select a state';
  defaultOption.selected = true;
  stateInput.appendChild(defaultOption);


  const zipInput = document.getElementById('zip');
  const emailInput = document.getElementById('email');

  generateStateSelectionList();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const isValid = checkInputs();
    if (!isValid) {
      return;
    }
   


  });

  function checkInputs() {
    let isValid = true;

    isValid &= validateUserName(userNameInput);
    isValid &= validateLastName(lastNameInput);
    isValid &= validatePhoneNumber(phoneNumberInput);
    isValid &= validateAddress(addressInput);
    isValid &= validateCity(cityInput);
    isValid &= validateState(stateInput);
    isValid &= validateZip(zipInput);
    isValid &= validateEmail(emailInput);

    return isValid;
  }

  function validateUserName(input) {
        const value = input.value.trim();
       if (value === '') {
       setErrorFor(input, 'Name cannot be blank');
         return false;
      }
       input.value = capitalize(value);
      setSuccessFor(input);
       return true;
     }

  function validateLastName(input) {
    const value = input.value.trim();
    if (value === '') {
      setErrorFor(input, 'Last Name cannot be blank');
      return false;
    }
    input.value = capitalize(value);
    setSuccessFor(input);
    return true;
  }

  function validatePhoneNumber(input) {
    const value = input.value.trim();
    if (value === '') {
      setErrorFor(input, 'Phone number cannot be blank');
      return false;
    }
    setSuccessFor(input);
    return true;
  }

  function validateAddress(input) {
    const value = input.value.trim();
    if (value === '') {
      setErrorFor(input, 'Address cannot be blank');
      return false;
    }
    setSuccessFor(input);
    return true;
  }

  function validateCity(input) {
    const value = input.value.trim();
    if (value === '') {
      setErrorFor(input, 'City cannot be blank');
      return false;
    }
    input.value = capitalize(value);
    setSuccessFor(input);
    return true;
  }


  function validateState(input) {
    const value = input.value.trim();
    if (value === '') {
      setErrorFor(input, 'State cannot be blank');
      return false;
    } else if (value.length !== 2) {
      setErrorFor(input, 'State must be two characters long');
      return false;
    }
    input.value = value.toUpperCase();
    setSuccessFor(input);
    return true;
  }


  function validateZip(input) {
    const value = input.value.trim();
    if (value === '') {
      setErrorFor(input, 'Zip Code cannot be blank');
      return false;
    }
    setSuccessFor(input);
    return true;
  }

  function validateEmail(input) {
    const value = input.value.trim();
    if (value === '') {
      setErrorFor(input, 'Email cannot be blank');
      return false;
    } else if (!isEmail(value)) {
      setErrorFor(input, 'Not a valid email');
      return false;
    }
    setSuccessFor(input);
    return true;
  }

  function isEmail(email) {
    return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
  }


  function capitalize(str) {
    return str.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }

  function toUpperCase(str) {
    return str.toUpperCase();

  }

 


  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
  }
  

  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
  }


  function generateStateSelectionList() {
    const stateInput = document.getElementById('state');
    states.forEach(state => {
      const option = document.createElement('option');
      option.value = state;
      option.textContent = state;
      stateInput.appendChild(option);
    });
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;
    if (input.id === 'state') {
      input.value = input.value.toUpperCase();
    }
    formControl.className = 'form-control success';
  }

});