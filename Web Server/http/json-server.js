const output = document.querySelector("p");

const form = document.querySelector("form");

const formId = document.querySelector("#form__id");
const formTitle = document.querySelector("#form__title");
const formAuthor = document.querySelector("#form__author");
const formComment = document.querySelector("#form__comment");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  switch (e.submitter.value) {
    case "POST":
      fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formTitle.value,
          author: formAuthor.value,
        }),
      })
        .then((data) => data.json())
        .then((data) => (output.innerHTML = JSON.stringify(data, null, "\t")));
      break;

    case "GET":
      if (formId.value === null) {
        fetch("http://localhost:3000/posts")
          .then((data) => data.json())
          .then((data) => (output.innerHTML = JSON.stringify(data)));
        break;
      }
      fetch(`http://localhost:3000/posts/${formId.value}`)
        .then((data) => {
          if (data.ok) return data.json();
          throw new Error("something is wrong");
        })
        .then((data) => (output.innerHTML = JSON.stringify(data)))
        .catch((err) => (output.innerHTML = "That's not a valid ID"));
      break;
    case "PUT":
      fetch(`http://localhost:3000/posts/${formId.value}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: formId.value,
          title: formTitle.value,
          author: formAuthor.value,
        }),
      })
        .then((data) => {
          if (data.ok) return data.json();
          throw new Error("something is wrong");
        })
        .then((data) => (output.innerHTML = JSON.stringify(data)))
        .catch((err) => (output.innerHTML = "That's not a valid ID"));
      break;
    case "PATCH":
      fetch(`http://localhost:3000/posts/${formId.value}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: formId.value,
          title: formTitle.value,
        }),
      })
        .then((data) => {
          if (data.ok) return data.json();
          throw new Error("something is wrong");
        })
        .then((data) => (output.innerHTML = JSON.stringify(data)))
        .catch((err) => (output.innerHTML = "That's not a valid ID"));
      break;
    case "DELETE":
      fetch(`http://localhost:3000/posts/${formId.value}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: formId.value,
          title: formTitle.value,
          author: formAuthor.value,
        }),
      })
        .then((data) => {
          if (data.ok) return data.json();
          throw new Error("something is wrong");
        })
        .then((data) => (output.innerHTML = JSON.stringify(data)))
        .catch((err) => (output.innerHTML = "That's not a valid ID"));
      break;
    default:
      break;
  }
});
