const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");
const mockdata = require('./routes/mockdata')
const site = require('./routes/site')
// Initiate Mongo Server
InitiateMongoServer();

const app = express();

app.use(cors())

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

//Set headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Request-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.get("/HAHA", (req, res) => {  // To extract data
  res.json({ message: "Hello Friends!" });
});
app.use("/web", site);
app.use("/data", mockdata); // Data Analytics

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
