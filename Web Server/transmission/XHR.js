let xhr = new XMLHttpRequest();

xhr.open("GET", "https://httpbin.org/get");

xhr.onload = function () {
  if (this.status === 200) console.log(xhr.response);
  else console.log("Something is wrong but the request is still done");
};

xhr.onerror = function () {
  console.error("Something is wrong on the server");
};

xhr.send();
