/*******************************************
 * Filename: antiBot.js
 * Author: Sam Nye
 * Last Date Modified: April 21, 2022
 * Description: This is the scripts for combating the bots for a simple security implementation
 *
 *
 ******************************************/

/*******************
 * Global Variable *
 *******************/
const ELEMS = {
  form: undefined,
  trap: undefined,
};

/*********************
 * Query Assignments *
 ********************/
function assignQuery() {
  ELEMS.form = document.querySelector("form");
  ELEMS.trap = document.querySelector("#honeytrap");
}

/*************************
 * EventListener Binding *
 ************************/
function bindEventListener() {
  ELEMS.form.addEventListener("submit", (e) => {
    if (ELEMS.trap.value !== "") {
      ELEMS.form.action = "./fail.html";
    } else {
      ELEMS.form.action = "./success.html";
    }
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
