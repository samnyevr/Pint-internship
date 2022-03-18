// Global Variable
const ELEM = {
  select: document.querySelector("#image_options"),
  list_jpg: document.querySelector("#jpg"),
  list_png: document.querySelector("#png"),
  list_webp: document.querySelector("#webp"),
  list_avif: document.querySelector("#avif"),
  list_gif: document.querySelector("#gif"),
  list_svg: document.querySelector("#svg"),
  list_image_jpg: document.querySelector("#jpg source"),
  list_image_png: document.querySelector("#png source"),
  list_image_webp: document.querySelector("#webp source"),
  list_image_avif: document.querySelector("#avif source"),
  list_image_gif: document.querySelector("#gif source"),
  list_image_svg: document.querySelector("#svg source"),
  list_header_jpg: document.querySelector("#jpg header"),
  list_header_png: document.querySelector("#png header"),
  list_header_webp: document.querySelector("#webp header"),
  list_header_avif: document.querySelector("#avif header"),
  list_header_gif: document.querySelector("#gif header"),
  list_header_svg: document.querySelector("#svg header"),
  list_rank_jpg: document.querySelector("#jpg_rank"),
  list_rank_png: document.querySelector("#png_rank"),
  list_rank_webp: document.querySelector("#webp_rank"),
  list_rank_avif: document.querySelector("#avif_rank"),
  list_rank_gif: document.querySelector("#gif_rank"),
  list_rank_svg: document.querySelector("#svg_rank"),
  obj: null,
};

// helper function for grabing the actual file from the json file
function rank_cal(rank) {
  switch (rank) {
    case "1":
      return ELEM.obj["medals"][0];
    case "2":
      return ELEM.obj["medals"][1];
    case "3":
      return ELEM.obj["medals"][2];
    case "4":
      return ELEM.obj["medals"][3];
    case "5":
      return ELEM.obj["medals"][4];
    case "6":
      return ELEM.obj["medals"][5];
    default:
      break;
  }
}

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
        switch (key.format) {
          case "jpg":
            ELEM.list_image_jpg.setAttribute("srcset", key.src);
            ELEM.list_image_jpg.setAttribute("alt", key.alt);
            ELEM.list_header_jpg.innerHTML = `<h2>${key.format}</h2><p>${key.fileSize}</p>`;
            ELEM.list_rank_jpg.setAttribute("src", `${rank_cal(key.rank).src}`);
            ELEM.list_rank_jpg.setAttribute("alt", `${rank_cal(key.rank).alt}`);
            break;
          case "png":
            ELEM.list_image_png.setAttribute("srcset", key.src);
            ELEM.list_image_png.setAttribute("alt", key.alt);
            ELEM.list_header_png.innerHTML = `<h2>${key.format}</h2><p>${key.fileSize}</p>`;
            console.log(rank_cal(key.rank).src);
            ELEM.list_rank_png.setAttribute("src", `${rank_cal(key.rank).src}`);
            ELEM.list_rank_png.setAttribute("alt", `${rank_cal(key.rank).alt}`);
            break;
          case "webp":
            ELEM.list_image_webp.setAttribute("srcset", key.src);
            ELEM.list_image_webp.setAttribute("alt", key.alt);
            ELEM.list_header_webp.innerHTML = `<h2>${key.format}</h2><p>${key.fileSize}</p>`;
            ELEM.list_rank_webp.setAttribute(
              "src",
              `${rank_cal(key.rank).src}`
            );
            ELEM.list_rank_webp.setAttribute(
              "alt",
              `${rank_cal(key.rank).alt}`
            );
            break;
          case "avif":
            ELEM.list_image_avif.setAttribute("srcset", key.src);
            ELEM.list_image_avif.setAttribute("alt", key.alt);
            ELEM.list_header_avif.innerHTML = `<h2>${key.format}</h2><p>${key.fileSize}</p>`;
            ELEM.list_rank_avif.setAttribute(
              "src",
              `${rank_cal(key.rank).src}`
            );
            ELEM.list_rank_avif.setAttribute(
              "alt",
              `${rank_cal(key.rank).alt}`
            );
            break;
          case "gif":
            ELEM.list_image_gif.setAttribute("srcset", key.src);
            ELEM.list_image_gif.setAttribute("alt", key.alt);
            ELEM.list_header_gif.innerHTML = `<h2>${key.format}</h2><p>${key.fileSize}</p>`;
            ELEM.list_rank_gif.setAttribute("src", `${rank_cal(key.rank).src}`);
            ELEM.list_rank_gif.setAttribute("alt", `${rank_cal(key.rank).alt}`);
            break;
          case "svg":
            ELEM.list_image_svg.setAttribute("srcset", key.src);
            ELEM.list_image_svg.setAttribute("alt", key.alt);
            ELEM.list_header_svg.innerHTML = `<h2>${key.format}</h2><p>${key.fileSize}</p>`;
            ELEM.list_rank_svg.setAttribute("src", `${rank_cal(key.rank).src}`);
            ELEM.list_rank_svg.setAttribute("alt", `${rank_cal(key.rank).alt}`);
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
  bindEventListeners();
}

document.addEventListener("DOMContentLoaded", init);
