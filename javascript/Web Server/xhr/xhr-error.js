let xhr = new XMLHttpRequest();

xhr.open("GET", "https://httplayground.introweb.tech/get");

xhr.onload = function xhrLoad() {
  if (this.status === 200) console.log(xhr.response);
  else console.log("something is wrong but the request is still done");
};

xhr.onerror = function xhrError() {
  console.error("Something is wrong with the server");
};

xhr.send();
