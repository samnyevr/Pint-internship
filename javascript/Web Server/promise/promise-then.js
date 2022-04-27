// define the promise
let promise = new Promise(function (resolve, reject) {
  resolve(1);
});

promise
  .then(function (value) {
    return value + 2;
  })
  .then(function (computed_value) {
    console.log("Computed value: " + computed_value);
  }); /* Computed value: 3 */
