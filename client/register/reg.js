document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    const messageDiv = document.getElementsByClassName('message');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // add registration logic kater

        messageDiv.item(0).innerHTML = 'Registration Successful! redirecting to login page..!';
    
        const link = document.createElement('a');
        link.href = '../login/login.html';

        setTimeout(() => {
            link.click();
        }, 2000);
    });
});
