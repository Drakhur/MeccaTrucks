document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Send login request to server
      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Login failed');
        }
      })
      .then(data => {
        // Handle successful login (redirect, display message, etc.)
        console.log('Login successful:', data);
        alert('Login successful!');
      })
      .catch(error => {
        // Handle login error (display error message, clear form, etc.)
        console.error('Login error:', error);
        alert('Login failed. Please try again.');
      });
    });
  });

  