// fetch with async/await syntax
async function fetchExample() {
  try {
    const response = await fetch("https://httplayground.introweb.tech/get");
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw Error("Fetch Error");
    }
  } catch (err) {
    console.error("Server is working, but not fetch request\n", err);
  }
}
fetchExample();
