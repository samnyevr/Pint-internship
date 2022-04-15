/**
 * Filename: collector.js
 * Author: Sam Nye
 * Last Date Modified: Oct 14, 2022
 * Description: TODO
 */

/*********************/
/**     CLASSES     **/
/*********************/

// Queue class to enqueue dequeue and push to localStorage
class Queue {
  constructor(name) {
    this.container = JSON.parse(localStorage.getItem([name])) || [];
    this.name = name;
  }

  enqueue(data) {
    this.container.push(data);
    localStorage.setItem(this.name, JSON.stringify(this.container));
  }

  dequeue() {
    const data = this.container.shift();
    localStorage.setItem(this.name, JSON.stringify(this.container));
    return data;
  }

  empty() {
    this.container.length = 0;
    localStorage.removeItem(this.name);
  }

  get length() {
    return this.container.length;
  }

  get isEmpty() {
    return !this.container.length;
  }

  get peek() {
    return this.container[0];
  }
}

/**********************/
/** GLOBAL VARIABLES **/
/**********************/

const API = "https://httpbin.org/post"; //"https://httplayground.introweb.tech/post";

const STATIC = {
  dataType: "STATIC",
  timeStamp: undefined,
  screen: {
    availHeight: undefined,
    availLeft: undefined,
    availTop: undefined,
    availWidth: undefined,
    colorDepth: undefined,
    height: undefined,
    width: undefined,
    pixelDepth: undefined,
  },
  location: {
    hash: undefined,
    host: undefined,
    hostname: undefined,
    href: undefined,
    origin: undefined,
    pathname: undefined,
    port: undefined,
    protocol: undefined,
    search: undefined,
  },
  visualViewport: {
    height: undefined,
    width: undefined,
    offsetLeft: undefined,
    offsetTop: undefined,
    pageLeft: undefined,
    pageTop: undefined,
    scale: undefined,
  },
  navigator: {
    appVersion: undefined,
    cookieEnabled: undefined,
    deviceMemory: undefined,
    hardwareConcurrency: undefined,
    maxTouchPoints: undefined,

    connection: {
      downlink: undefined,
      effectiveType: undefined,
      rtt: undefined,
      saveData: undefined,
    },
    language: undefined,
    userAgent: undefined,
  },
  scrollX: undefined,
  scrollY: undefined,
  locationbar: { visible: undefined },
  menubar: { visible: undefined },
  personalbar: { visible: undefined },
  scrollbars: { visible: undefined },
  statusbar: { visible: undefined },
  toolbar: { visible: undefined },
  innerWidth: undefined,
  innerHeight: undefined,
  outerWidth: undefined,
  outerHeight: undefined,
  devicePixelRatio: undefined,
  screenLeft: undefined,
  screenTop: undefined,
};

const DYNAMIC = {
  dataType: "DYNAMIC",
  timeStamp: undefined,
  performance: {
    startTime: undefined,
    fetchStart: undefined,
    requestStart: undefined,
    responseStart: undefined,
    responseEnd: undefined,
    domInteractive: undefined,
    domContentLoadedEventStart: undefined,
    domContentLoadedEventEnd: undefined,
    domComplete: undefined,
    loadEventStart: undefined,
    loadEventEnd: undefined,
    duration: undefined,
    transferSize: undefined,
    decodedBodySize: undefined,
    ready: false,
  },
};

const EVENT = {
  dataType: "EVENT",
  timeStamp: undefined,
  timing: {
    pageEnter: null,
    pageLeave: null,
    currPage: null,
  },
};

// initialize the queue array for storing all the collected data
let queue = new Queue("queue");

// initialize the bundled data for sending to an end point
let bundle = new Queue("bundle");

/************************************/
/**     PROGRAM INITIALIZATION     **/
/************************************/

document.addEventListener("DOMContentLoaded", init);

// initialize all queries and event listeners
async function init() {
  bindEventListeners();

  // collect initial STATIC data
  collectStatic();
  queue.enqueue(STATIC);

  // collect initial window.performance data
  await collectPerformance();
  queue.enqueue(DYNAMIC);

  send();
}

/******************************/
/**     EVENTLISTENERS       **/
/******************************/

function bindEventListeners() {
  let mousemoveEvents = 0;

  // Record every 10th mouse coordinate inside the window (there will be a lot)
  window.addEventListener("mousemove", (e) => {
    mousemoveEvents += 1;
    if (mousemoveEvents % 10 != 0) return;
    queue.enqueue(collectMoveEvents(e));
  });

  // Record all mouse clicks inside the window
  window.addEventListener("click", (e) => {
    queue.enqueue(collectMoveEvents(e));
  });

  // Record all keydowns inside the window
  window.addEventListener("keydown", (e) => {
    queue.enqueue(collectMoveEvents(e));
  });

  // Record all keyups inside the window
  window.addEventListener("keyup", (e) => {
    queue.enqueue(collectMoveEvents(e));
  });

  // collect the screen orientation event data
  screen.orientation.addEventListener("change", (e) => {
    let orientationEvent = {
      dataType: "ORIENTATION",
      timeStamp: new Date().getTime(),
      eventTimeStamp: e.timeStamp,
      angle: window.screen.orientation.angle,
      type: window.screen.orientation.type,
    };
    queue.enqueue(orientationEvent);
  });
}

/******************************/
/**     HELPER FUNCTIONS     **/
/******************************/

// collect all the static data
function collectStatic() {
  for (let data in STATIC) {
    if (data == "dataType") {
      continue;
    }
    if (data === "timeStamp") {
      STATIC[data] = new Date().getTime();
      continue;
    }
    if (isObject(STATIC[data])) {
      for (let innerData in STATIC[data]) {
        STATIC[data][innerData] = window[data][innerData];
      }
    } else {
      STATIC[data] = window[data];
    }
  }
}

// collect all the perrformance data and send back as a promise
function collectPerformance() {
  let perf = performance.getEntriesByType("navigation")[0];
  do {
    return new Promise((resolve) => {
      setTimeout(() => {
        for (let data in DYNAMIC.performance) {
          if (data === "ready") {
            DYNAMIC.performance[data] = true;
            continue;
          }
          DYNAMIC.performance[data] = perf[data];
        }

        DYNAMIC["timeStamp"] = new Date().getTime();
        resolve("resovled");
      });
    }, 250);
  } while (perf.loadEventEnd != 0);
}

// collect mousemove, click, keydown, or keyup event data
function collectMoveEvents(e) {
  let {
    type,
    clientX,
    clientY,
    layerX,
    layerY,
    offsetX,
    offsetY,
    pageX,
    pageY,
    screenX,
    screenY,
    x,
    y,
    key,
    code,
    altKey,
    ctrlKey,
    shiftKey,
    timeStamp,
  } = e;
  let tempArray = {
    type,
    clientX,
    clientY,
    layerX,
    layerY,
    offsetX,
    offsetY,
    pageX,
    pageY,
    screenX,
    screenY,
    x,
    y,
    key,
    code,
    altKey,
    ctrlKey,
    shiftKey,
    timeStamp,
  };
  let eventObject = {
    dataType: type.toUpperCase(),
    timeStamp: new Date().getTime(),
    eventTimeStamp: timeStamp,
  };
  for (let data in tempArray) {
    if (
      tempArray[data] !== undefined &&
      data !== "timeStamp" &&
      data !== "type"
    ) {
      eventObject[data] = tempArray[data];
    }
  }
  return eventObject;
}

// check if a passed in value is an object
function isObject(value) {
  return !!(value && typeof value === "object" && !Array.isArray(value));
}

// send to end point whene there are still data collected in the queue
// else loop through this fucntion again in 5 seconds to check if there are still data
async function send() {
  console.log("sending data");
  if (queue.length > 0) {
    bundleData();
  }
  while (bundle.length > 0) {
    let reseult = await fetchEndPoint(API);
  }

  setTimeout(send, 5000);
}

// bundling up the data to send to end point
function bundleData() {
  let tempArray = [];
  while (!queue.isEmpty) {
    tempArray.push(queue.dequeue());
  }
  bundle.enqueue(tempArray);
  return true;
}

// fetching from an end point
async function fetchEndPoint(url) {
  try {
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(bundle.peek),
    });
    if (!response.ok) {
      throw new Error(`an error has occured: ${response.status}`);
    }
    bundle.dequeue();
    let data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
