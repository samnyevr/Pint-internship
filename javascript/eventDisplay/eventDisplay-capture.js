/********************
 * Global Variables *
 *******************/

const ELEMS = {
  clickEvent: undefined,
  mouseMoveEvent: undefined,
  replayButton: undefined,
};

/********************
 *      Init        *
 *******************/
document.addEventListener("DOMContentLoaded", init);

function init() {
  assignGlobalVariables();
  bindEventListeners();
}

/********************
 *   Assign Global  *
 *******************/
function assignGlobalVariables() {
  ELEMS.clickEvent = [];
  ELEMS.mouseMoveEvent = [];
  ELEMS.replayButton = document.querySelector("button");
}

/********************
 *  EventListeners  *
 *******************/
function bindEventListeners() {
  window.addEventListener("click", (e) => {
    ELEMS.clickEvent.push({
      altKey: e.altKey,
      clientX: e.clientX,
      clientY: e.clientY,
      ctrlKey: e.ctrlKey,
      timeStampe: new Date().getTime(),
    });
  });

  window.addEventListener("mousemove", (e) => {
    ELEMS.clickEvent.push({
      altKey: e.altKey,
      clientX: e.clientX,
      clientY: e.clientY,
      ctrlKey: e.ctrlKey,
      timeStampe: new Date().getTime(),
    });
  });

  ELEMS.replayButton.addEventListener("click", () => {
    let prevTime = false;
    ELEMS.clickEvent.forEach(async (item) => {
      if (prevTime) {
        let waitTime = item.timeStampe - prevTime;
        await setTimeout(() => {
          document.querySelector("img").style.left = `${item.clientX}px`;
          document.querySelector("img").style.top = `${item.clientY}px`;
        }, waitTime);
      } else {
        document.querySelector("img").style.left = `${item.clientX}px`;
        document.querySelector("img").style.top = `${item.clientY}px`;
      }
      prevTime = item.timeStampe;
    });
    ELEMS.mouseMoveEvent.forEach(async (item) => {
      if (prevTime) {
        let waitTime = item.timeStampe - prevTime;
        await setTimeout(() => {
          document.querySelector("img").style.left = `${item.clientX}px`;
          document.querySelector("img").style.top = `${item.clientY}px`;
        }, waitTime);
      } else {
        document.querySelector("img").style.left = `${item.clientX}px`;
        document.querySelector("img").style.top = `${item.clientY}px`;
      }
      prevTime = item.timeStampe;
    });
  });
}
