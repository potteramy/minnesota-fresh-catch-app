const newFormHandler = async function (event) {
  const fish_type = document.querySelector('select[name="fishType"]').value;
  const fish_length = document.querySelector('input[name="fishLength"]').value;
  const lake_name = document.querySelector('select[name="lakeName"]').value;
  const date_caught = document.querySelector('input[name="dateInput"]').value;

  await fetch("/api/catch", {
    method: "POST",
    body: JSON.stringify({
      fish_type,
      fish_length,
      lake_name,
      date_caught,
    }),
    headers: { "Content-Type": "application/json" },
  });
};
