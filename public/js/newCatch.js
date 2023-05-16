const newFormHandler = async function(event) {
  event.preventDefault();
  
  //
  // TODO: Adjust the following variables, selectors, etc. to fit our code.
  //       Link this file to profile.handlebars

  const fish_type = document.querySelector('select[name="fishType"]').value;
  const fish_length = document.querySelector('input[name="fishLength"]').value;
  const lake_name = document.querySelector('select[name="lakeName"]').value;
  const date_caught = document.querySelector('input[name="dateInput"]').value;
  
  await fetch("/api/catch", {
    method: 'POST',
    body: JSON.stringify({
      fish_type,
      fish_length,
      lake_name,
      date_caught
    }),
    headers: { 'Content-Type': 'application/json' }
  });
  
  // document.location.replace('/dashboard');
};
document.addEventListener("DOMContentLoaded", function () {
  console.log("test")
  // Perform an AJAX request to fetch the data from the server
  fetch("/user/api/:id")
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    //   // Process the retrieved data
    //   // Example: Assuming there is an element with ID "data-container" to display the data
    //   var dataContainer = document.getElementById("data-container"); //Question on the "data-container"
    //   dataContainer.innerHTML = generateDataHtml(data);
    })
    .catch(function (error) {
      console.log("Error:", error);
    });
});

  