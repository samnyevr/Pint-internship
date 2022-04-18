// initializing express and set up cors
import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

// variables to keep in the server for tracking
let visitedTimes = 0;
let visitorID = undefined;
let origin = undefined;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send(JSON.stringify({ visitedTimes, visitorID }));
});

app.post("/", (req, res) => {
  // initialize the user and make sure that it's from the same origin
  // we use the origin to stimulate IP address here for tracking
  if (visitorID === undefined && origin === undefined) {
    visitorID = [];
    visitorID.push(req.body.visitorId);
    origin = req.body.origin;
  } else if (origin === req.body.origin) {
    visitorID.push(req.body.visitorId);
  }
  if (visitorID.includes(req.body.visitorId) && origin === req.body.origin) {
    console.log(visitorID);
    visitedTimes++;
  }
  res.send(JSON.stringify({ visitedTimes, visitorID }));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
