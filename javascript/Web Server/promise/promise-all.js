// Promise.all

async function testPromiseAll() {
  let promiseAll = await Promise.all([
    new Promise((res) => res(1)),
    new Promise((res) => res(2)),
    new Promise((res) => res(3)),
  ]);

  console.log(promiseAll.map((data) => data));
}

testPromiseAll();

// Promise.allSettled
async function testPromiseAllSettled() {
  let promiseAllSettled = await Promise.allSettled([
    new Promise((res) => res(1)),
    new Promise((res) => res(2)),
    new Promise((res) => res(3)),
  ]);

  console.log(promiseAllSettled.map((data) => data.value));
}

testPromiseAllSettled();

async function testPromiseRace() {
  let promiseRace = await Promise.race([
    new Promise((res, rej) => {
      setTimeout(rej, 2000, "one");
    }),
    new Promise((res, rej) => {
      setTimeout(rej, 1000, "two");
    }),
    new Promise((res) => {
      setTimeout(res, 3000, "three");
    }),
  ]);

  console.log(promiseRace);
}

testPromiseRace();

async function testPromiseAny() {
  let promiseAny = await Promise.race([
    new Promise((res, rej) => {
      setTimeout(rej, 2000, "one");
    }),
    new Promise((res, rej) => {
      setTimeout(res, 1000, "two");
    }),
    new Promise((res) => {
      setTimeout(res, 3000, "three");
    }),
  ]);

  console.log(promiseAny);
}

testPromiseAny();
