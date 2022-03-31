fetch("http://httpbin.org/get")
  .then((response) => {
    if (response.ok) return response.text();
    else return Promise.reject(response);
  })
  .then((data) => console.log(data))
  .catch((err) => console.error("something is wrong", err));
