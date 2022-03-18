// Global Variable
const ELEMS = {
  select: null,
  list_fileTypes: null,
  list_fileSize: null,
  list_sources: null,
  list_rank: null,
  obj: null,
};

//bind different queries
function bindQueries() {
  ELEMS.select = document.querySelector("select");

  let formatList = ["jpg", "png", "webp", "avif", "gif", "svg"];

  ELEMS.list_fileTypes = Array.from(
    document.querySelectorAll('figure[id|="fig"] .file-type')
  )
    // reducer function to set the array into an object with each file type corresponding to its tag
    .reduce((prev, cur, index) => {
      return { ...prev, [formatList[index]]: cur };
    }, {});

  ELEMS.list_fileSize = Array.from(
    document.querySelectorAll('figure[id|="fig"] .file-size')
  ).reduce((prev, cur, index) => {
    return { ...prev, [formatList[index]]: cur };
  }, {});
  ELEMS.list_sources = Array.from(
    document.querySelectorAll('figure[id|="fig"] .img-source')
  ).reduce((prev, cur, index) => {
    return { ...prev, [formatList[index]]: cur };
  }, {});
  ELEMS.list_rank = Array.from(
    document.querySelectorAll('figure[id|="fig"] .img-rank')
  ).reduce((prev, cur, index) => {
    return { ...prev, [formatList[index]]: cur };
  }, {});
}

// helper function for grabing the actual file from the json file
function rank_cal(rank) {
  switch (rank) {
    case "1":
      return ELEMS.obj["medals"][0];
    case "2":
      return ELEMS.obj["medals"][1];
    case "3":
      return ELEMS.obj["medals"][2];
    case "4":
      return ELEMS.obj["medals"][3];
    case "5":
      return ELEMS.obj["medals"][4];
    case "6":
      return ELEMS.obj["medals"][5];
    default:
      break;
  }
}

//helper function for setting the different card items their appropriate new contents
function switchContent({ src, alt, fileSize, rank }, format) {
  ELEMS.list_fileTypes[format].innerHTML = format;
  ELEMS.list_fileTypes[format].innerHTML = fileSize;
  ELEMS.list_sources[format].setAttribute("srcset", src);
  ELEMS.list_sources[format].setAttribute("alt", alt);
  ELEMS.list_rank[format].setAttribute("src", `${rank_cal(rank).src}`);
  ELEMS.list_rank[format].setAttribute("alt", `${rank_cal(rank).alt}`);
}

// binding different event listeners
function bindEventListeners() {
  // fetching from ImageFormat.json
  fetch("./ImageFormat.json")
    .then((data) => data.json())
    .then((obj) => (ELEMS.obj = obj));

  // adding eventlistener to the drop down menu
  ELEMS.select.addEventListener("change", (event) => {
    if (event.target.value in ELEMS.obj) {
      ELEMS.obj[event.target.value].forEach((key) => {
        switch (key.format) {
          case "jpg":
            switchContent(key, "jpg");
            break;
          case "png":
            switchContent(key, "png");
            break;
          case "webp":
            switchContent(key, "webp");
            break;
          case "avif":
            switchContent(key, "avif");
            break;
          case "gif":
            switchContent(key, "gif");
            break;
          case "svg":
            switchContent(key, "svg");
            break;
          default:
            break;
        }
      });
    }
  });
}

// initialization on event binding
function init() {
  bindQueries();
  bindEventListeners();
}

document.addEventListener("DOMContentLoaded", init);
