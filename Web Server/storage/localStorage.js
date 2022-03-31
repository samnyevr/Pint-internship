const favColor = document.querySelector("#fav-color");
const form = document.querySelector("form");

document.body.style.backgroundColor = localStorage.getItem("favColor");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  localStorage.setItem("favColor", favColor.value);
  document.body.style.backgroundColor = localStorage.getItem("favColor");
});

// setting the key-value pair
localStorage.setItem(
  "drink",
  "coffee"
); /* Storage Object: {"drink": "coffee"}*/
localStorage.setItem("cups", 5); /* Storage Object: {"cup": "5"}*/
localStorage.setItem({ overdose: true }, ["coffee", "is", "life"]);
/* Storage Object: {"{}": "coffee,is,life"} */

// getting the value from the key
console.log(localStorage.getItem("drink")); /* output: "coffee" */
console.log(localStorage.getItem("cups")); /* output: "5" */
console.log(localStorage.getItem({ overdose: true }));
/* output: "coffee,is,life" */

localStorage.key(1); /* output: "drink" */

localStorage.length; /* output: 3 */

localStorage.removeItem("cups"); /* Storage.length = 2 */

localStorage.length;
/* output: 2 */

localStorage.clear(); /* Storage.length = 0 */
