document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
  
    form.addEventListener('submit', function (event) {
      // Regex pattern for validating email
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
      // Check if email matches the pattern
      if (!emailPattern.test(emailInput.value)) {
        // Prevent form submission
        event.preventDefault();
        // Display error message
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
      } else {
        // Hide error message if email is valid
        emailError.style.display = 'none';
      }
    });
  
    // Hide error message when user starts typing
    emailInput.addEventListener('input', function () {
      emailError.style.display = 'none';
    });
  });
  