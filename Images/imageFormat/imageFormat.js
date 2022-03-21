// Global Variable
const ELEMS = {
  select: undefined,
  list_fileTypes: undefined,
  list_fileSize: undefined,
  list_sources: undefined,
  list_rank: undefined,
  obj: undefined,
};

//bind different queries
function bindQueries() {
  ELEMS.select = document.querySelector("select");

  ELEMS.list_fileTypes = Array.from(
    document.querySelectorAll('figure[id|="fig"] .file-type')
  );

  ELEMS.list_fileSize = Array.from(
    document.querySelectorAll('figure[id|="fig"] .file-size')
  );
  ELEMS.list_sources = Array.from(
    document.querySelectorAll('figure[id|="fig"] .img-source')
  );
  ELEMS.list_rank = Array.from(
    document.querySelectorAll('figure[id|="fig"] .img-rank')
  );

  // Transforming the array into something more easily parsed
  // HTMLElement --> image format {string}: HTMLElement
  // ELEMS.list_fileTypes = ELEMS.list_fileTypes.map((elem) => {
  //   let formattedElem = {};
  //   formattedElem[elem.dataset.type] = elem;
  //   return formattedElem;
  // });

  let fileTypes = {};
  ELEMS.list_fileTypes.forEach((elem) => {
    fileTypes[elem.dataset.type] = elem;
  });
  ELEMS.list_fileTypes = fileTypes;

  fileTypes = {};
  ELEMS.list_fileSize.forEach((elem) => {
    fileTypes[elem.dataset.type] = elem;
  });
  ELEMS.list_fileSize = fileTypes;

  fileTypes = {};
  ELEMS.list_rank.forEach((elem) => {
    fileTypes[elem.dataset.type] = elem;
  });
  ELEMS.list_rank = fileTypes;

  fileTypes = {};
  ELEMS.list_sources.forEach((elem) => {
    fileTypes[elem.dataset.type] = elem;
  });
  ELEMS.list_sources = fileTypes;
}

//helper function for setting the different card items their appropriate new contents
function switchContent({ src, alt, fileSize, rank }, format) {
  ELEMS.list_fileTypes[format].innerHTML = format;
  ELEMS.list_fileSize[format].innerHTML = fileSize;

  // helper function for grabing the actual file from the json file
  function _rankCal(rank) {
    return ELEMS.obj["medals"][Number(rank) - 1];
  }

  ELEMS.list_sources[format].setAttribute("srcset", src);
  ELEMS.list_sources[format].setAttribute("alt", alt);
  ELEMS.list_rank[format].setAttribute("src", `${_rankCal(rank).src}`);
  ELEMS.list_rank[format].setAttribute("alt", `${_rankCal(rank).alt}`);
}

// binding different event listeners
function bindEventListeners() {
  // fetching from ImageFormat.json
  fetch("./ImageFormat.json")
    .then((data) => data.json())
    .then((obj) => (ELEMS.obj = obj));

  // adding eventlistener to the drop down menu
  ELEMS.select.addEventListener("change", (event) => {
    // check to make sure that the dropdown has a value
    if (!ELEMS.obj[event.target.value]) return;
    // Switch the page to the dropdown value
    ELEMS.obj[event.target.value].forEach((key) => {
      switchContent(key, key.format);
    });
  });
}

// initialization on event binding
function init() {
  bindQueries();
  bindEventListeners();
}

document.addEventListener("DOMContentLoaded", init);
