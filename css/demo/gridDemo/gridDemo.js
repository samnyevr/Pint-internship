/*
  initialization of all the constant elements
  buttonOne - first button for selecting layout
  buttonTwo - second button for selecting layout
  buttonThree - third button for selecting layout
  grid - the grid that is in display
*/

const ELEMS = {
  buttonOne: undefined,
  buttonTwo: undefined,
  buttonThree: undefined,
  grid: undefined,
};

/* 
  binding the query selectors
  Variables: buttonOne, buttonTwo, buttonThree, grid
*/
function bindQueries() {
  ELEMS.buttonOne = document.querySelector("#button-layout1");
  ELEMS.buttonTwo = document.querySelector("#button-layout2");
  ELEMS.buttonThree = document.querySelector("#button-layout3");
  ELEMS.grid = document.querySelector(".grid");
}

function bindEventListeners() {
  // swaping out the class for different layout
  ELEMS.buttonOne.addEventListener("click", () => {
    ELEMS.grid.classList.remove("grid-layout2", "grid-layout3");
    ELEMS.grid.classList.add("grid-layout1");
  });
  ELEMS.buttonTwo.addEventListener("click", () => {
    ELEMS.grid.classList.remove("grid-layout1", "grid-layout3");
    ELEMS.grid.classList.add("grid-layout2");
  });
  ELEMS.buttonThree.addEventListener("click", () => {
    ELEMS.grid.classList.remove("grid-layout1", "grid-layout2");
    ELEMS.grid.classList.add("grid-layout3");
  });
}

function init() {
  bindQueries();
  bindEventListeners();
}

document.addEventListener("DOMContentLoaded", init);
