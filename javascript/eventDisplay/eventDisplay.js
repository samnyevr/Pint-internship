/********************
 * Global Variables *
 *******************/

const ELEMS = {
  replayButton: undefined,
  events: {
    clickEvent: undefined,
    mouseMoveEvent: undefined,
  },
  mouse: {
    click: undefined,
    cursor: undefined,
  },
  keys: {
    altKey: undefined,
    ctrlKey: undefined,
    shiftKey: undefined,
  },
};

/********************
 *      Init        *
 *******************/
document.addEventListener("DOMContentLoaded", init);

function init() {
  initImages();
  assignGlobalVariables();
  bindEventListeners();
}

function initImages() {
  document.body.innerHTML += `<img
      src="./dot.svg"
      id="click"
      alt="black dot"
      style="position: absolute"
      width="10px"
      height="10px"
      hidden
    />
    <img
      src="./cursor.webp"
      id="cursor"
      alt="cursor"
      style="position: absolute"
      width="20px"
      height="20px"
      hidden
    />
    <img
      src="./control.webp"
      id="controlKey"
      alt="control key"
      style="position: absolute"
      width="50px"
      height="50px"
      hidden
    /><img
      src="./alt.webp"
      id="altKey"
      alt="alt key"
      style="position: absolute"
      width="50px"
      height="50px"
      hidden
    />
    <img
      src="./shift.webp"
      id="shiftKey"
      alt="shift key"
      style="position: absolute"
      width="100px"
      height="100px"
      hidden
    />`;
}

/********************
 *   Assign Global  *
 *******************/
function assignGlobalVariables() {
  ELEMS.replayButton = document.querySelector("button");

  ELEMS.events.clickEvent = [];
  ELEMS.events.mouseMoveEvent = [];

  ELEMS.mouse.click = document.querySelector("#click");
  ELEMS.mouse.cursor = document.querySelector("#cursor");

  ELEMS.keys.altKey = document.querySelector("#altKey");
  ELEMS.keys.ctrlKey = document.querySelector("#controlKey");
  ELEMS.keys.shiftKey = document.querySelector("#shiftKey");
}

/********************
 *  EventListeners  *
 *******************/
function bindEventListeners() {
  // collect click events
  window.addEventListener("click", (e) => {
    ELEMS.events.clickEvent.push({
      altKey: e.altKey,
      clientX: e.clientX,
      clientY: e.clientY,
      ctrlKey: e.ctrlKey,
      shiftKey: e.shiftKey,
      button: e.button,
      timeStampe: new Date().getTime(),
    });
  });

  let counter = 0;
  // collect mousemove events
  window.addEventListener("mousemove", (e) => {
    counter += 1;
    if (counter % 10 != 0) return;
    ELEMS.events.mouseMoveEvent.push({
      altKey: e.altKey,
      clientX: e.clientX,
      clientY: e.clientY,
      ctrlKey: e.ctrlKey,
      timeStampe: new Date().getTime(),
    });
  });

  // display the replay of user movements
  ELEMS.replayButton.addEventListener("click", () => {
    ELEMS.mouse.cursor.hidden = false;
    let prevTime = false;

    // display the click events
    ELEMS.events.clickEvent.forEach(async (item) => {
      let keyPositionX = 10;
      let keyPositionY = "70vh";

      if (prevTime) {
        let waitTime = item.timeStampe - prevTime;
        await setTimeout(async () => {
          ELEMS.mouse.click.hidden = false;

          // set the position of the click
          ELEMS.mouse.click.style.left = `${item.clientX}px`;
          ELEMS.mouse.click.style.top = `${item.clientY}px`;

          if (item.altKey) {
            ELEMS.keys.altKey.hidden = false;
            ELEMS.keys.altKey.style.left = `${keyPositionX}vw`;
            ELEMS.keys.altKey.style.top = keyPositionY;
            keyPositionX += 20;
          }
          if (item.ctrlKey) {
            ELEMS.keys.ctrlKey.hidden = false;
            ELEMS.keys.ctrlKey.style.left = `${keyPositionX}vw`;
            ELEMS.keys.ctrlKey.style.top = keyPositionY;
            keyPositionX += 20;
          }

          if (item.shiftKey) {
            ELEMS.keys.shiftKey.hidden = false;
            ELEMS.keys.shiftKey.style.left = `${keyPositionX}vw`;
            ELEMS.keys.shiftKey.style.top = keyPositionY;
            keyPositionX += 20;
          }

          // set the click to disappear after 3ms
          setTimeout(() => {
            ELEMS.mouse.click.hidden = true;
            ELEMS.keys.shiftKey.hidden = true;
            ELEMS.keys.altKey.hidden = true;
            ELEMS.keys.ctrlKey.hidden = true;
          }, 500);
        }, waitTime);
      } else {
        ELEMS.mouse.click.hidden = false;

        if (item.altKey) {
          ELEMS.keys.altKey.hidden = false;
          ELEMS.keys.altKey.style.left = `${keyPositionX}vw`;
          ELEMS.keys.altKey.style.top = keyPositionY;
          keyPositionX += 20;
        }
        if (item.ctrlKey) {
          ELEMS.keys.ctrlKey.hidden = false;
          ELEMS.keys.ctrlKey.style.left = `${keyPositionX}vw`;
          ELEMS.keys.ctrlKey.style.top = keyPositionY;
          keyPositionX += 20;
        }

        if (item.shiftKey) {
          ELEMS.keys.shiftKey.hidden = false;
          ELEMS.keys.shiftKey.style.left = `${keyPositionX}vw`;
          ELEMS.keys.shiftKey.style.top = keyPositionY;
          keyPositionX += 20;
        }
        // set the position of the click
        ELEMS.mouse.click.style.left = `${item.clientX}px`;
        ELEMS.mouse.click.style.top = `${item.clientY}px`;

        // set the click to disappear after 3ms
        setTimeout(() => {
          ELEMS.mouse.click.hidden = true;
          ELEMS.keys.shiftKey.hidden = true;
          ELEMS.keys.altKey.hidden = true;
          ELEMS.keys.ctrlKey.hidden = true;
        }, 500);
      }
      prevTime = item.timeStampe;
    });

    ELEMS.events.mouseMoveEvent.forEach(async (item) => {
      let keyPositionX = 10;
      let keyPositionY = "70vh";

      if (prevTime) {
        let waitTime = item.timeStampe - prevTime;
        await setTimeout(() => {
          // set the position of the cursors
          ELEMS.mouse.cursor.style.left = `${item.clientX}px`;
          ELEMS.mouse.cursor.style.top = `${item.clientY}px`;

          if (item.altKey) {
            ELEMS.keys.altKey.hidden = false;
            ELEMS.keys.altKey.style.left = `${keyPositionX}vw`;
            ELEMS.keys.altKey.style.top = keyPositionY;
            keyPositionX += 20;
          }
          if (item.ctrlKey) {
            ELEMS.keys.ctrlKey.hidden = false;
            ELEMS.keys.ctrlKey.style.left = `${keyPositionX}vw`;
            ELEMS.keys.ctrlKey.style.top = keyPositionY;
            keyPositionX += 20;
          }

          if (item.shiftKey) {
            ELEMS.keys.shiftKey.hidden = false;
            ELEMS.keys.shiftKey.style.left = `${keyPositionX}vw`;
            ELEMS.keys.shiftKey.style.top = keyPositionY;
            keyPositionX += 20;
          }

          // set the click to disappear after 3ms
          setTimeout(() => {
            ELEMS.keys.shiftKey.hidden = true;
            ELEMS.keys.altKey.hidden = true;
            ELEMS.keys.ctrlKey.hidden = true;
          }, 500);
        }, waitTime);
      } else {
        ELEMS.mouse.cursor.style.left = `${item.clientX}px`;
        ELEMS.mouse.cursor.style.top = `${item.clientY}px`;

        if (item.altKey) {
          ELEMS.keys.altKey.hidden = false;
          ELEMS.keys.altKey.style.left = `${keyPositionX}vw`;
          ELEMS.keys.altKey.style.top = keyPositionY;
          keyPositionX += 20;
        }
        if (item.ctrlKey) {
          ELEMS.keys.ctrlKey.hidden = false;
          ELEMS.keys.ctrlKey.style.left = `${keyPositionX}vw`;
          ELEMS.keys.ctrlKey.style.top = keyPositionY;
          keyPositionX += 20;
        }

        if (item.shiftKey) {
          ELEMS.keys.shiftKey.hidden = false;
          ELEMS.keys.shiftKey.style.left = `${keyPositionX}vw`;
          ELEMS.keys.shiftKey.style.top = keyPositionY;
          keyPositionX += 20;
        }
        // set the position of the click
        ELEMS.mouse.click.style.left = `${item.clientX}px`;
        ELEMS.mouse.click.style.top = `${item.clientY}px`;

        // set the click to disappear after 3ms
        setTimeout(() => {
          ELEMS.keys.shiftKey.hidden = true;
          ELEMS.keys.altKey.hidden = true;
          ELEMS.keys.ctrlKey.hidden = true;
        }, 500);
      }
      prevTime = item.timeStampe;
    });
  });
}
