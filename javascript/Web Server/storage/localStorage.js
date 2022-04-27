c;

// setting an item in localStorage and sessionStorage
localStorage.setItem("task", "drink coffee");
sessionStorage.setItem("task", "drink more coffee");

// getting the item set in localStorage and sessionStorage
localStorage.getItem("task"); /* output: drink coffee */
sessionStorage.getItem("task"); /* output: drink more coffee */

// setting the key-value pair
localStorage.setItem(
  "drink",
  "coffee"
); /* Storage Object: {"drink": "coffee"}*/
localStorage.setItem("cups", 5); /* Storage Object: {"cup": "5"}*/
localStorage.setItem(
  JSON.stringify({ overdose: true }),
  JSON.stringify(["coffee", "is", "life"])
);
/* Storage Object: {"{"overdose": "true"}": "["coffee","is","life"]"} */

// getting the value from the key
console.log(localStorage.getItem("drink")); /* output: "coffee" */
console.log(localStorage.getItem("cups")); /* output: "5" */
console.log(
  JSON.parse(localStorage.getItem(JSON.stringify({ overdose: true })))
); /* output: [coffee,is,life] */

localStorage.key(1); /* output: "drink" */

localStorage.length; /* output: 3 */

localStorage.removeItem("cups"); /* Storage.length = 2 */

localStorage.length;
/* output: 2 */

// localStorage.clear(); /* Storage.length = 0 */
