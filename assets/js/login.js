/**
   * Initiate  validation check
   */
var needsValidation = document.querySelectorAll('.needs-validation')

Array.prototype.slice.call(needsValidation)
  .forEach(function(form) {
    form.addEventListener('submit', function(event) {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })

  document.getElementById('done-button').addEventListener('click', async () => {
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('user-role').value;

    try {
        const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fullName, email, password, role })
        });

        const data = await response.json();
        if (data.message === 'User registered successfully.') {
            alert('Registration successful. Please log in.');
            window.location.href = 'login.html';
        } else {
            alert(data.message);
        }
    } catch (error) {
        alert('Error registering user');
    }
});


//login handling redirecting to page based on role
document.getElementById('login-button').addEventListener('click', async () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
      const response = await fetch('http://localhost:3306/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      if (data.message === 'Login successful') {
          if (data.role === 'customer') {
              window.location.href = 'index.html';
          } else if (data.role === 'agent') {
              window.location.href = 'agent.html';
          }
      } else {
          alert(data.message);
      }
  } catch (error) {
      alert('Error logging in');
  }
});