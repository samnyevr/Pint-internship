let promise = new Promise(function (resolve, reject) {
  reject("ERROR");
});

promise
  .then(function (value) {
    console.log(value + 2); /* This is ignored */
  })
  .catch(function (error) {
    console.error("this is the error: " + error);
    /* this is executed instead */
  });
