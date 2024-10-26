// Open and close modal
const openRoleModal = document.getElementById('create-account');
const closeRoleModal = document.getElementById('done-btn');
const userRoleModal = document.getElementById('user-roleModal');

openRoleModal.addEventListener('click', () => {
    userRoleModal.style.display = 'flex';
});

// closeRoleModal.addEventListener('click', () => {
//     userRoleModal.style.display = 'none';
// });


window.addEventListener('click', (event) => {
    if (event.target === userRoleModal) {
        userRoleModal.style.display = 'none';
    }
});

// ddirecting users to respective role selected page
document.getElementById('mortgageForm').addEventListener('submit',function(event){
    event.preventDefault();
    const selectedRole=document.getElementById('select-role').value;

    if(selectedRole ==='Agent/Partner'){
        alert("Agent registered successfully ");
        window.Location.href="agents.html";
    }else if(selectedRole ==='Customer/Client'){
        alert("customer  registered successfully ");
        window.Location.href='agents.html';
    }else{
        alert("select user role to proceed  ");
    }

});

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

   //registration  handling  page based on role
   document.getElementById('done-button').addEventListener('click', async () => {
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('select-role"').value;

    try {
        const response = await fetch('http://localhost:3306/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fullName, email, password, role })
        });

        const data = await response.json();
        if (data.message === 'User registered successfully.') {
            alert('Registration successful. Please log in.');
            window.location.href = 'user-registration.html';
        } else {
            alert(data.message);
        }
    } catch (error) {
        alert('Error registering user');
    }
});