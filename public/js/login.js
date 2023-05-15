//we have one event to catch login form data (loginFormHandler), and another to catch signup form data (signupFormHandler); each check for email and password requirements//

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  //if email and password are submitted, send req.body to server to check for correct login credentials
  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    //if the response is true, load homepage
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};

async function signupFormHandler(event) {
  event.preventDefault();

  const firstName = document.querySelector("#first_name").value
  const lastName = document.querySelector("#last_name").value
  const email = document.querySelector('#email').value
  const password = document.querySelector('#password').value

    const response = await fetch('/api/profile', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/api/profile');
    } else {
      alert('Failed to sign up.'); //working
    }
  };

// document
//   .querySelector('.login')
//   .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
