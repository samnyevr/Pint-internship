/*******************************************
 * Filename: antiBot.js
 * Author: Sam Nye
 * Last Date Modified: April 21, 2022
 * Description: This is the scripts for combating the bots for a simple security implementation
 * Types of Functionality
 * 1) Blocking simple bot form submission
 * 2) Detecting mouse movement to determine if it's a bot or not
 ******************************************/

/*******************
 * Global Variable *
 *******************/
const ELEMS = {
  form: undefined,
  trap: undefined,
  functionalities: undefined,
  messageBox: undefined,
  botButton: undefined,
  mouseMove: undefined,
  mouseSuccess: undefined,
};

/******************************
 * Global Vaiable Assignments *
 *****************************/
function assignGlobal() {
  ELEMS.form = document.querySelector("form");
  ELEMS.trap = document.querySelector("#honeyPot");
  ELEMS.messageBox = document.querySelector("#message");
  ELEMS.functionalities = [
    document.querySelector("#basic"),
    document.querySelector("#mouse"),
  ];
  ELEMS.mouseMove = 0;
  ELEMS.mouseSuccess = false;
  ELEMS.botButton = document.querySelector("#bot");
}

/*************************
 * EventListener Binding *
 ************************/
function bindEventListener() {
  ELEMS.botButton.addEventListener("click", () => {
    ELEMS.mouseMove = 0;
    ELEMS.mouseSuccess = false;
  });

  ELEMS.form.addEventListener("submit", (e) => {
    e.preventDefault();

    let notBot = true;

    ELEMS.functionalities.forEach((option) => {
      if (option.checked) {
        // check if the basic bot detection is turned on
        if (option.value === "basic" && ELEMS.trap.value !== "") {
          notBot = false;
        } else if (option.value === "mouse") {
          if (!ELEMS.mouseSuccess) notBot = false;
        }
      }
    });

    // display the message after form submission
    if (notBot) {
      ELEMS.messageBox.innerHTML = "Successfully Submitted the Form";
    } else {
      ELEMS.messageBox.innerHTML = "GET OFF MY LAWN";
    }

    // reset form for next submission
    ELEMS.form.reset();
  });

  // check if the user has moved their mouse or not
  window.addEventListener("mousemove", function mouseEventListener(e) {
    ELEMS.mouseMove++;
    if (ELEMS.mouseMove > 100) {
      ELEMS.mouseSuccess = true;
    }
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
