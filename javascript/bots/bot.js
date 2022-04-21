/*******************************************
 * Filename: bot.js
 * Author: Sam Nye
 * Last Date Modified: April 21, 2022
 * Description: This is the scripts for a simple bot to try and breach the security of a form submission
 *
 *
 ******************************************/

/*******************
 * Global Variable *
 *******************/
const ELEMS = {
  allInput: undefined,
  botButton: undefined,
  form: undefined,
};

/*********************
 * Query Assignments *
 ********************/
function assignQuery() {
  ELEMS.allInput = document.querySelectorAll("input");
  ELEMS.botButton = document.querySelector("#bot");
  ELEMS.form = document.querySelector("form");
}

/*************************
 * EventListener Binding *
 ************************/
function bindEventListener() {
  ELEMS.botButton.addEventListener("click", () => {
    ELEMS.allInput.forEach((input) => {
      if (input.name === "name") {
        input.value = "John Smith";
      } else {
        input.value = "Something";
      }
    });

    const submitEvent = new SubmitEvent("submit");
    ELEMS.form.dispatchEvent(submitEvent);
    ELEMS.form.submit();
  });
}

/*****************
 * Init Function *
 *****************/
function init() {
  assignQuery();
  bindEventListener();
}

// initialize after page load
window.addEventListener("DOMContentLoaded", init);
