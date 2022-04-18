// Initialize the agent at application startup.
const fpPromise = import("https://openfpcdn.io/fingerprintjs/v3").then(
  (FingerprintJS) => FingerprintJS.load()
);

// Get the visitor identifier when you need it.
fpPromise
  .then((fp) => fp.get())
  .then((result) => {
    // This is the visitor identifier:
    const visitorId = result.visitorId;
    const fingerprint = visitorId;

    // fetching from an end point to track the visiting time
    fetch("http://127.0.0.1:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        origin: window.location.origin,
        visitorId,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.querySelector(
          "h1"
        ).innerText = `You have visited this website ${data.visitedTimes} times`;
      })
      .catch((err) => console.error(err));

    document.querySelector(
      "p"
    ).innerText = `Your fingerprint is ${fingerprint}`;
  });
