// Global Variable
const ELEM = {
  select: document.querySelector("#image_options"),
  list_jpg: document.querySelector("#jpg"),
  list_png: document.querySelector("#png"),
  list_webp: document.querySelector("#webp"),
  list_avif: document.querySelector("#avif"),
  list_gif: document.querySelector("#gif"),
  list_svg: document.querySelector("#svg"),
  list_image_jpg: document.querySelector("#jpg img"),
  list_image_png: document.querySelector("#png img"),
  list_image_webp: document.querySelector("#webp img"),
  list_image_avif: document.querySelector("#avif img"),
  list_image_gif: document.querySelector("#gif img"),
  list_image_svg: document.querySelector("#svg img"),
  list_header_jpg: document.querySelector("#jpg header"),
  list_header_png: document.querySelector("#png header"),
  list_header_webp: document.querySelector("#webp header"),
  list_header_avif: document.querySelector("#avif header"),
  list_header_gif: document.querySelector("#gif header"),
  list_header_svg: document.querySelector("#svg header"),
  obj: null,
};

// binding different event listeners
function bindEventListeners() {
  // fetching from ImageFormat.json
  fetch("./ImageFormat.json")
    .then((data) => data.json())
    .then((obj) => (ELEM.obj = obj));

  // adding eventlistener to the drop down menu
  ELEM.select.addEventListener("change", (event) => {
    if (event.target.value in ELEM.obj) {
      ELEM.obj[event.target.value].forEach((key) => {
        // decision to display image format
        if (key.display) {
          switch (key.format) {
            case "jpg":
              ELEM.list_jpg.removeAttribute("hidden");
              ELEM.list_image_jpg.setAttribute("src", key.src);
              ELEM.list_image_jpg.setAttribute("alt", key.alt);
              ELEM.list_header_jpg.innerHTML = `<h2>${key.format}</h2><p>${key.fileSize}</p><span>${key.rank}</span>`;
              break;
            case "png":
              ELEM.list_png.removeAttribute("hidden");
              ELEM.list_image_png.setAttribute("src", key.src);
              ELEM.list_image_png.setAttribute("alt", key.alt);
              ELEM.list_header_png.innerHTML = `<h2>${key.format}</h2><p>${key.fileSize}</p><span>${key.rank}</span>`;
              break;
            case "webp":
              ELEM.list_webp.removeAttribute("hidden");
              ELEM.list_image_webp.setAttribute("src", key.src);
              ELEM.list_image_webp.setAttribute("alt", key.alt);
              ELEM.list_header_webp.innerHTML = `<h2>${key.format}</h2><p>${key.fileSize}</p><span>${key.rank}</span>`;
              break;
            case "avif":
              ELEM.list_avif.removeAttribute("hidden");
              ELEM.list_image_avif.setAttribute("src", key.src);
              ELEM.list_image_avif.setAttribute("alt", key.alt);
              ELEM.list_header_avif.innerHTML = `<h2>${key.format}</h2><p>${key.fileSize}</p><span>${key.rank}</span>`;
              break;
            case "gif":
              ELEM.list_gif.removeAttribute("hidden");
              ELEM.list_image_gif.setAttribute("src", key.src);
              ELEM.list_image_gif.setAttribute("alt", key.alt);
              ELEM.list_header_gif.innerHTML = `<h2>${key.format}</h2><p>${key.fileSize}</p><span>${key.rank}</span>`;
              break;
            case "svg":
              ELEM.list_svg.removeAttribute("hidden");
              ELEM.list_image_svg.setAttribute("src", key.src);
              ELEM.list_image_svg.setAttribute("alt", key.alt);
              ELEM.list_header_svg.innerHTML = `<h2>${key.format}</h2><p>${key.fileSize}</p><span>${key.rank}</span>`;
              break;
            default:
              break;
          }
        } else {
          // hiding the element
          switch (key.format) {
            case "jpg":
              ELEM.list_jpg.setAttribute("hidden", "");
              break;
            case "png":
              ELEM.list_png.setAttribute("hidden", "");
              break;
            case "webp":
              ELEM.list_webp.setAttribute("hidden", "");
              break;
            case "avif":
              ELEM.list_avif.setAttribute("hidden", "");
              break;
            case "gif":
              ELEM.list_gif.setAttribute("hidden", "");
              break;
            case "svg":
              ELEM.list_svg.setAttribute("hidden", "");
              break;
            default:
              break;
          }
        }
      });
    }
  });
}

// initialization on event binding
function init() {
  bindEventListeners();
}

document.addEventListener("DOMContentLoaded", init);
