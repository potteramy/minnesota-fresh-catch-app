const newFormHandler = async function(event) {
  event.preventDefault();
  
  //
  // TODO: Adjust the following variables, selectors, etc. to fit our code.
  //       Link this file to profile.handlebars

  const speciesOfFish = document.querySelector('input[name="fishType"]').value;
  const lengthOfFish = document.querySelector('input[name="fishLength"]').value;
  const nameOfLake = document.querySelector('select[name="lakeName"]').value;
  const dateCaught = document.querySelector('input[name="dateInput"]').value;

  console.log(speciesOfFish)
  
  await fetch("/api/catch", {
    method: 'POST',
    body: JSON.stringify({
      speciesOfFish,
      lengthOfFish,
      nameOfLake,
      dateCaught
    }),
    headers: { 'Content-Type': 'application/json' }
  });
  
  // document.location.replace('/dashboard');
};
  

  