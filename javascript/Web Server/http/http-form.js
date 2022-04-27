const output = document.querySelector("p");

const form = document.querySelector("form");

const formTitle = document.querySelector(`input[type="text"]`);
const formBody = document.querySelector(`input[type="textarea"]`);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  switch (e.submitter.value) {
    case "POST":
      fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formTitle: formTitle.value,
          formBody: formBody.value,
        }),
      })
        .then((data) => data.json())
        .then((data) => (output.innerHTML = JSON.stringify(data, null, "\t")));
      break;
    case "GET":
      fetch("https://httpbin.org/get")
        .then((data) => data.json())
        .then((data) => (output.innerHTML = JSON.stringify(data)));
      break;
    case "PUT":
      fetch("https://httpbin.org/put", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formTitle: formTitle.value,
          formBody: formBody.value,
        }),
      })
        .then((data) => data.json())
        .then((data) => (output.innerHTML = JSON.stringify(data)));
      break;
    case "DELETE":
      fetch("https://httpbin.org/delete", {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formTitle: formTitle.value,
          formBody: formBody.value,
        }),
      })
        .then((data) => data.json())
        .then((data) => (output.innerHTML = JSON.stringify(data)));
      break;
    default:
      break;
  }
});
