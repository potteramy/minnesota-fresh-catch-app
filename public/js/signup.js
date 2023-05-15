const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const firstNameEl = document.querySelector('#first_name');
    const lastNameEl = document.querySelector('#last_name');
    const passwordEl = document.querySelector('#password');
  
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        firstname: firstNameEl.value,
        lastname: lastNameEl.value,
        password: passwordEl.value,
      }),
      // headers: { 'Content-Type': 'application/json' },
    });
  
    // if (response.ok) {
    //   document.location.replace('/homepage');
    // } else {
    //   alert('Failed to sign up');
    // }
  };
  
  document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);
  