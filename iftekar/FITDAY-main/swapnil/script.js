document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('formSuccess');
  const submitBtn = document.querySelector('.submit-btn');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';

    // Grab values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple email regex for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation
    if (name === '' || email === '' || message === '') {
      showError('Please fill in all fields.');
      return;
    }

    if (!emailRegex.test(email)) {
      showError('Please enter a valid email address.');
      return;
    }

    // Simulate form submission (replace with actual AJAX call)
    setTimeout(() => {
      // If passed, show success and reset form
      successMessage.classList.remove('d-none');
      form.reset();
      
      // Reset button state
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit';
      
      // Hide success message after 4 seconds
      setTimeout(() => {
        successMessage.classList.add('d-none');
      }, 4000);
      
      // Scroll to show success message
      successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 1500);
  });

  function showError(message) {
    const errorAlert = document.createElement('div');
    errorAlert.className = 'alert alert-danger mt-3';
    errorAlert.textContent = message;
    
    // Remove any existing error alerts
    const existingError = form.querySelector('.alert-danger');
    if (existingError) {
      existingError.remove();
    }
    
    form.insertBefore(errorAlert, form.lastElementChild);
    
    // Reset button state
    submitBtn.disabled = false;
    submitBtn.textContent = 'Submit';
    
    // Remove error after 4 seconds
    setTimeout(() => {
      errorAlert.remove();
    }, 4000);
  }

  // Add animation to form inputs on focus
  const inputs = form.querySelectorAll('.form-control');
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      if (this.value === '') {
        this.parentElement.classList.remove('focused');
      }
    });
  });
});