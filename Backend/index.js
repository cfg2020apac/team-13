const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

app.get("/HAHA", (req, res) => {  // To extract data
  res.json({ message: "Hello Friends!" });
});

//app.use("/data", mockdata);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});