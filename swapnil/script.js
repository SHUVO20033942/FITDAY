document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('formSuccess');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Grab values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple email regex for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // If passed, show success and reset form
    successMessage.classList.remove('d-none');
    form.reset();

    // Hide success message after 4 seconds
    setTimeout(() => {
      successMessage.classList.add('d-none');
    }, 4000);
  });
});