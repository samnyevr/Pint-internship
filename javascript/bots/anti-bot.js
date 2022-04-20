let form = document.querySelector("form");
let trap = document.querySelector("#honeytrap");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("is this called?");
  if (trap.value !== "") {
    console.log(trap.value);
    form.action = "./fail.html";
  } else {
    form.action = "./success.html";
  }
  form.submit();
});
