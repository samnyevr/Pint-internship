// Global Variables
/*
 */
const STATIC = {
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
  screen: {
    orientation: undefined,
  },
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
  mousePosition: [],
  mouseClicks: [],
  keystrokes: {
    keydown: [],
    keyup: [],
  },
  timing: {
    pageEnter: null,
    pageLeave: null,
    currPage: null,
  },
};

class Queue {
  constructor() {
    this.container = JSON.parse(localStorage.getItem(["queue"])) || [];
  }

  set enqueue(data) {
    this.container.push(data);
    localStorage.setItem("queue", JSON.stringify(this.container));
  }

  get dequeue() {
    const data = this.container.shift();
    localStorage.setItem("queue", JSON.stringify(this.container));
    return data;
  }

  get isEmpty() {}

  get peek() {
    return this.container[0];
  }
}


// initialize the queue array for storing all the collected data
let queue = new Queue();
// let queue = JSON.parse(localStorage.getItem(["queue"])) || [];

// binding event listeners
function bindEventListeners() {}

// initialize all queries and event listeners
async function init() {
  bindEventListeners();
  collectStatic();

  // collect initial STATIC data
  /*
   */
  // queue.push(JSON.stringify(STATIC));
  // localStorage.setItem("queue", JSON.stringify(queue));
  queue.enqueue = STATIC;

  // collect initial window.performance data
  await collectPerformance();
  await queue.enqueue = DYNAMIC;
  // await queue.push(JSON.stringify(DYNAMIC));
  // await localStorage.setItem("queue", JSON.stringify(queue));

  await fetchEndPoint("https://httpbin.org/post");
}

// initialize the static data
function collectStatic() {
  for (let data in STATIC) {
    if (isObject(STATIC[data])) {
      for (let innerData in STATIC[data]) {
        STATIC[data][innerData] = window[data][innerData];
      }
    } else {
      STATIC[data] = window[data];
    }
  }
}

// collect all perrformance data and send back as a promise
function collectPerformance() {
  let perf = performance.getEntriesByType("navigation")[0];
  do {
    return new Promise((resolve) => {
      setTimeout(() => {
        DYNAMIC.performance.startTime = perf.startTime;
        DYNAMIC.performance.fetchStart = perf.fetchStart;
        DYNAMIC.performance.requestStart = perf.requestStart;
        DYNAMIC.performance.responseStart = perf.responseStart;
        DYNAMIC.performance.responseEnd = perf.responseEnd;
        DYNAMIC.performance.domInteractive = perf.domInteractive;
        DYNAMIC.performance.domContentLoadedEventStart =
          perf.domContentLoadedEventStart;
        DYNAMIC.performance.domContentLoadedEventEnd =
          perf.domContentLoadedEventEnd;
        DYNAMIC.performance.domComplete = perf.domComplete;
        DYNAMIC.performance.loadEventStart = perf.loadEventStart;
        DYNAMIC.performance.loadEventEnd = perf.loadEventEnd;
        DYNAMIC.performance.duration = perf.duration;
        DYNAMIC.performance.transferSize = perf.transferSize;
        DYNAMIC.performance.decodedBodySize = perf.decodedBodySize;
        DYNAMIC.performance.ready = true;
        resolve("resovled");
      });
    }, 250);
  } while (perf.loadEventEnd != 0);
}

// DOESN'T WORK!!!!!!
// NEED DEEP OBJECT COPY THINGY
function initData(data, windowData) {
  if (!isObject(data)) {
    return null;
  }
  for (let child in data) {
    if (isObject(data[child])) {
      data[child] = initData(data[child], windowData);
    } else {
      data[child] = windowData[child];
    }
  }
  return data;
}

// Helper Function
// setter for localStorage to make object or array into string
Storage.prototype.set = (key, value) => {
  if (isObject(value)) {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
};

// Helper Function
// getting for localStorage to turn the result back into object or array
Storage.prototype.get = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return localStorage.getItem(key);
  }
};

// Helper Function
// check if a pass in value is an object
function isObject(value) {
  return !!(value && typeof value === "object" && !Array.isArray(value));
}

// fetching from an end point
async function fetchEndPoint(url) {
  try {
    let response = await fetch(url, {
      method: "POST",
      body: localStorage.get("queue"),
    });
    if (!response.ok) {
      throw new Error(`an error has occured: ${response.status}`);
    }
    let data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

document.addEventListener("DOMContentLoaded", init);
