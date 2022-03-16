console.log(window.innerWidth);

const screenSize = document.querySelector("#screenSize");

screenSize.innerHTML = `${window.innerWidth} x ${window.innerHeight}`;

window.addEventListener("resize", () => {
  screenSize.innerHTML = `${window.innerWidth} x ${window.innerHeight}`;
});
