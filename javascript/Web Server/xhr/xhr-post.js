let xhr = new XMLHttpRequest();

xhr.open("POST", "https://httplayground.introweb.tech/post");

xhr.onload = function () {
  console.log(xhr.response);
};

xhr.send("Some Contents");
