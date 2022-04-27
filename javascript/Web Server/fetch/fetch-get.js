// fetch with async/await syntax
async function fetchExample() {
  // fetch data from an URL
  const response = await fetch(
    "https://httplayground.introweb.tech/get",
    // setting the option tag for GET request
    {
      method: "GET",
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
  // interpret response body with json
  const data = await response.json();
  // log the data from the response
  console.log(data);
}
fetchExample();
