let path = require("path");
let express = require("express");
let bodyParser = require("body-parser");

let server = express();

server.use(bodyParser.text({ type: "*/*" }));

// post request from sendBeacon
// print out the received payload from sendBeacon
server.post("/api/beacon", (req, res) => {
  console.log(req.body);

  res.sendStatus(204);
});

// serves everything from the public directory
server.use(express.static(path.resolve(__dirname, "../public")));

server.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
