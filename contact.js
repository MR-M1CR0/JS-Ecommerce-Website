document.addEventListener('DOMContentLoaded', function () {
  // Get form fields
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let password = document.getElementById('password');
  let confirmPassword = document.getElementById('confirmPassword');
  let message = document.getElementById('message');

  // Add onblur event listeners
  name.onblur = validateName;
  email.onblur = validateEmail;
  password.onblur = validatePasswordLength;
  confirmPassword.onblur = validatePasswords;
  message.onblur = validateMessage;

  // Validation functions
  function validateName() {
    if (/^\d/.test(this.value)) {
      displayError(this, 'Name cannot start with a number.');
    } else if (this.value.length > 20) {
      displayError(this, 'Name cannot be longer than 20 characters.');
    } else {
      clearError(this);
    }
  }

  function validateEmail() {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.value)) {
      displayError(this, 'Please enter a valid email address.');
    } else {
      clearError(this);
    }
  }

  function validatePasswordLength() {
    if (this.value.length < 8 || this.value.length > 15) {
      displayError(this, 'Password must be between 8 and 15 characters.');
    } else {
      clearError(this);
    }
  }

  function validatePasswords() {
    if (password.value !== confirmPassword.value) {
      displayError(confirmPassword, 'Passwords do not match.');
    } else if (this.value.length < 8 || this.value.length > 15) {
      displayError(this, 'Password must be between 8 and 15 characters.');
    } else {
      clearError(this);
    }
  }

  function validateMessage() {
    if (this.value.split(' ').length > 1000) {
      displayError(this, 'Message cannot be longer than 1000 words.');
    } else {
      clearError(this);
    }
  }

  // Function to display error message under an input field
  function displayError(input, message) {
    clearError(input);
    let errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.style.color = 'red';
    errorMessage.textContent = message;
    input.parentNode.insertBefore(errorMessage, input.nextSibling);
  }

  // Function to clear error message from an input field
  function clearError(input) {
    let nextElement = input.nextSibling;
    if (nextElement && nextElement.className === 'error-message') {
      input.parentNode.removeChild(nextElement);
    }
  }

  let form = document.getElementById('contact-form');

  // Add submit event listener
  form.addEventListener('submit', function (event) {
    // Prevent form submission
    event.preventDefault();

    // Validate form fields
    validateName.call(name);
    validateEmail.call(email);
    validatePasswordLength.call(password);
    validatePasswords.call(confirmPassword);
    validateMessage.call(message);

<<<<<<< HEAD
    form.addEventListener('submit', function (event) {
      // Prevent form submission
      event.preventDefault();

      // Validate form fields
      validateName.call(name);
      validateEmail.call(email);
      validatePasswordLength.call(password);
      validatePasswords.call(confirmPassword);
      validateMessage.call(message);

      // Check if there are any errors
      let errors = document.getElementsByClassName('error-message');
      if (errors.length === 0) {
        // If no errors, display success message using SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your message has been received. Thank you!',
          showCancelButton: false,
          confirmButtonColor: '#dc3545', // Red color
        });
      }
    });
=======
    // Check if there are any errors
    let errors = document.getElementsByClassName('error-message');
    if (errors.length === 0) {
      // If no errors, display success message
      alert('Your message has been received. Thank you!');
    }
>>>>>>> 919f0ebcf154475a727c35a7fd953b584dd243e8
  });
});
