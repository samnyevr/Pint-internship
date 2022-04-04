/*
fetch("http://httpbin.org/get")
  .then((response) => {
    if (response.ok) return response.text();
    else return Promise.reject(response);
  })
  .then((data) => console.log(data))
  .catch((err) => console.error("something is wrong", err)); 
  
*/

// fetch("http://httpbin.org/get" /* url path to an end point */, {
//   method: "GET" /* fetch method: GET */,
// })
//   .then((res) => {
//     return res.json();
//     /* read the response object and return a promise
//        this will parse the response body into a json
//     */
//   })
//   .then((data) => console.log(data) /* displaying the body */);

(async function fetchExample() {
  let httpBinGet = await fetch("https://httpbin.org/get");
  // getting data from a URL
  let response = await httpBinGet.json();
  /* 
    read the response object and return a promise
    this will parse the response body into a json
  */
  console.log(response);
  // do something with the response
})();
