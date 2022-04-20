const allInput = document.querySelectorAll("input");
let botButton = document.querySelector("#bot");

botButton.addEventListener("click", () => {
  allInput.forEach((input) => {
    input.value = "Something";
  });

  const submitEvent = new SubmitEvent("submit");
  document.querySelector("form").dispatchEvent(submitEvent);
});
