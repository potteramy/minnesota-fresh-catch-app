const newFormHandler = async function(event) {
    event.preventDefault();
  
    //
    // TODO: Adjust the following variables, selectors, etc. to fit our code.
    //       Link this file to profile.handlebars?

    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;
  
    await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.replace('/dashboard');
  };
  
  document
    .querySelector('.newCatch')
    .addEventListener('submit', newFormHandler);
  