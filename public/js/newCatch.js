const newFormHandler = async function (event) {
  event.preventDefault();
  const fish_type = document.querySelector('select[name="fishType"]').value;
  const fish_length = document.querySelector('input[name="fishLength"]').value;
  const lake_name = document.querySelector('select[name="lakeName"]').value;
  const date_caught = document.querySelector('input[name="dateInput"]').value;

  const resp = await fetch("/api/catch", {
    method: "POST",
    body: JSON.stringify({
      fish_type,
      fish_length,
      lake_name,
      date_caught,
    }),
    headers: { "Content-Type": "application/json" },
  });

  const result = await resp.json()
  if( result.status === "success" ){
    console.log("should reload")
    window.location.reload()
  }
};

// document.addEventListener("DOMContentLoaded", function () {
//   console.log("test");
//   // Perform an AJAX request to fetch the data from the server
//   fetch("/api/user/:id")
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       //   // Process the retrieved data
//       //   // Example: Assuming there is an element with ID "data-container" to display the data
//       //   var dataContainer = document.getElementById("data-container"); //Question on the "data-container"
//       //   dataContainer.innerHTML = generateDataHtml(data);
//     })
//     .catch(function (error) {
//       console.log("Error:", error);
//     });
// });
