/*******************************************
 * Filename: bot.js
 * Author: Sam Nye
 * Last Date Modified: April 21, 2022
 * Description: This is the scripts for a simple bot to try and breach the security of a form submission. The bot comes with basic form submission by default, but there arer more functionalities addded to enhance the ability to infitrate the system.
 * Types of Bot Functionality:
 * 1) Check for hidden attributes
 * 2) Imitate mouse movement
 ******************************************/

/*******************
 * Global Variable *
 *******************/
const ELEMS = {
  allInput: undefined,
  botButton: undefined,
  form: undefined,
  functionalities: undefined,
};

/******************************
 * Global Vaiable Assignments *
 *****************************/
function assignGlobal() {
  ELEMS.allInput = document.querySelectorAll("form  input");
  ELEMS.botButton = document.querySelector("#bot");
  ELEMS.form = document.querySelector("form");
  ELEMS.functionalities = [
    document.querySelector("#botEnhanced"),
    document.querySelector("#botMouse"),
  ];
}

/*************************
 * EventListener Binding *
 ************************/
function bindEventListener() {
  ELEMS.botButton.addEventListener("click", () => {
    // implement the basic bot functionality
    ELEMS.allInput.forEach((element) => {
      if (element.name === "name") {
        element.value = "John Smith";
      } else if (element.type === "number") {
        element.value = 2;
      } else if (element.type === "color") {
        element.value = "#464fbe";
      } else {
        element.value = "Something";
      }
    });

    ELEMS.functionalities.forEach((option) => {
      if (option.checked) {
        // check for hidden attributes and modify the form submission to avoid honeypot
        if (option.value === "botEnhanced") {
          ELEMS.allInput.forEach((element) => {
            if (element.hidden || element.ariaHidden) {
              element.value = "";
            }
          });
        }
        // imitate mouse movement to avoid being detected as a bot
        else if (option.value === "botMouse") {
          for (let i = 0; i < 105; i++) {
            const mouseEvent = new MouseEvent("mousemove");
            window.dispatchEvent(mouseEvent);
          }
        }
      }
    });

    const submitEvent = new SubmitEvent("submit");
    ELEMS.form.dispatchEvent(submitEvent);
  });
}

/*****************
 * Init Function *
 *****************/
function init() {
  assignGlobal();
  bindEventListener();
}

// initialize after page load
window.addEventListener("DOMContentLoaded", init);
