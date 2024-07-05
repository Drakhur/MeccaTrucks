document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    const messageDiv = document.getElementsByClassName('message');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulate registration (you would replace this with actual registration logic)
        // If registration is successful, redirect to login page
        // For demonstration purposes, we'll just log the credentials and redirect to login page
        console.log('Registration successful:');
        console.log('Username:', username);
        console.log('Password:', password);

        messageDiv.item(0).innerHTML = 'Registration Successful! redirecting to login page..!';
    
        const link = document.createElement('a');
        link.href = '../login/login.html';

        setTimeout(() => {
            link.click();
        }, 2000);
    });
});
