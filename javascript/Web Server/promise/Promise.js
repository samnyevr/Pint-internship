let promise = new Promise(function (resolve, reject) {
  reject("ERROR");
});

promise
  .then(function (value) {
    console.log(value + 2); /* ignored */
  })
  .catch(function (error) {
    console.error("this is the error: " + error);
    /* this is executed instead */
  });

(async function testPromiseAll() {
  let promiseAll = await Promise.allSettled([
    new Promise((res) => res(1)),
    new Promise((res) => res(2)),
    new Promise((res) => res(3)),
  ]);

  console.log(promiseAll.map((data) => data.value));
})();
