// // fetch with async/await syntax
// async function fetchExample() {
//   // fetch data from an URL
//   const response = await fetch(
//     "https://httplayground.introweb.tech/post",
//     // setting the option tag for POSt request
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "text/plain",
//         "Custom-header": "who am i ",
//       },
//       body: "Some Contents",
//     }
//   );
//   // interpret response body with json
//   const data = await response.text();
//   // log the data from the response
//   console.log(data);
// }
// fetchExample();

async function fetchExampe() {
  const resposne = fetch("https://httplayground.introweb.tech/post", {
    method: "POST",
    body: "Some Contents",
  });
  const data = response.text();
  console.log(data);
}
