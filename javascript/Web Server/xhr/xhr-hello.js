let xhr = new XMLHttpRequest();

xhr.open("GET", "https://httplayground.introweb.tech/get");

xhr.onload = function () {
  console.log(xhr.response);
};

xhr.send();
