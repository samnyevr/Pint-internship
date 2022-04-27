// fetch with .then() syntax
fetch("https://httplayground.introweb.tech/get")
  .then((response) => response.json())
  .then((data) => console.log(data));

// fetch with async/await syntax
async function fetchExample() {
  // fetch data from an URL
  const response = await fetch("https://httplayground.introweb.tech/get");
  // interpret response body with json
  const data = await response.json();
  // log the data from the response
  console.log(data);
}
fetchExample();
