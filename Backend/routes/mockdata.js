const express = require("express");
const { check, validationResult, query } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const NGOpartnerData = require("../model/ngo_partner")
const handsOnData = require("../model/handsOn");
const volunteerData = require("../model/volunteer_data");
const newVolunteerData = require("../model/new_volunteer");
const queries = require("./queries");
const e = require("express");

router.get("/ageCount", async (req, res) => {
  try {
    let ageSeparator = [18, 25, 40];
    cnt = {};
    for (let i = 0; i < ageSeparator.length + 1; i++) {
      let minVal = (i == 0 ? 0 : ageSeparator[i - 1]);
      let maxVal = (i == ageSeparator.length ? 200 : ageSeparator[i]) - 1;

      let key = minVal + "-" + maxVal;
      console.log(key);
      let volunteerCount = await volunteerData.where('Age').gte(minVal).lte(maxVal);
      cnt[key] = volunteerCount.length;
    }
    console.log(cnt);
    res.json(cnt);
  } catch (e) {
    console.log(e);
    res.send({ message: "Error in GETting ageCount" })
  }
});

router.get("/genderChart", async (req, res) => {
  try {
    let x = await newVolunteerData.find();
    //console.log(x);
    var output = { "Male": 0, "Female": 0, "Others": 0 };

    for (var element in x) {
      if (x[element]["Gender"] == 'Male') {
        output["Male"] += 1;
      }
      else if (x[element]["Gender"] == 'Female') {
        output["Female"] += 1;
      }
      else {
        output['Others'] += 1;
      }
    }
    //console.log(output);
    res.json(output);
  }
  catch (e) {
    console.log(e);
    res.send({ message: "Error in GETing types of Areas." })
  }
});

router.get("/attendanceChart", async (req, res) => {
  try {
    let x = await handsOnData.find();
    //console.log(x);
    var output = [];

    for (var element in x) {
      var giant = {
        "Event": x[element]["OccurenceID"].slice(-4),
        'Needed': x[element]['MaxAttendance'],
        'Confirmed': x[element]['Confirmed'],
        'Attended': x[element]['Attended']
      };
      output.push(giant);
    }
    //console.log(output);
    res.json(output);
  }
  catch (e) {
    console.log(e);
    res.send({ message: "Error in GETing types of Areas." })
  }
});

router.get("/typeChart", async (req, res) => {
  try {
    let x = await handsOnData.find();
    //console.log(x);
    var output = { 'Integrated': 0 };

    for (var element in x) {
      //console.log(x[element]);
      if (x[element]["PopulationsServed"] == "" || x[element]["PopulationsServed"].search(";") != -1) {
        output['Integrated'] += 1;
      }
      else if (x[element]["PopulationsServed"] in output) {
        output[x[element]["PopulationsServed"]] += 1;
      }
      else {
        output[x[element]["PopulationsServed"]] = 1;
      }
    }
    //console.log(output);
    res.json(output);
  }
  catch (e) {
    console.log(e);
    res.send({ message: "Error in GETing types of Areas." })
  }
});


router.post(
  "/handsOn",
  [
    check("occID", "Please Enter a occID")
      .not()
      .isEmpty(),
    check("Status", "Please Enter a Status")
      .not()
      .isEmpty(),
    check("PopulationsServed", "Please Enter a PopulationsServed")
      .not()
      .isEmpty(),
    check("ImpactArea", "Please Enter a ImpactArea")
      .not()
      .isEmpty(),
    check("Location", "Please Enter a Location")
      .not()
      .isEmpty(),
    check("Needed", "Please Enter a Needed")
      .not()
      .isEmpty(),
    check("Confirmed", "Please Enter a Confirmed")
      .not()
      .isEmpty(),
    check("Attended", "Please Enter a Attended")
      .not()
      .isEmpty(),
    check("TotalHours", "Please Enter a TotalHours")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const {
      occID,
      Status,
      PopulationsServed,
      ImpactArea,
      Location,
      Needed,
      Confirmed,
      Attended,
      TotalHours
    } = req.body;

    try {
      let event = await handsOn.findOne({
        occID
      });
      if (event) {
        return res.status(500).json({
          msg: "Entry Already Exists"
        });
      }
      handson = new handsOn({
        occID,
        Status,
        PopulationsServed,
        ImpactArea,
        Location,
        Needed,
        Confirmed,
        Attended,
        TotalHours
      });

      await handson.save();

    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  }
);

router.post(
  "/writeFinal",
  async (req, res) => {

    const query = queries.WRITE_FINALS;

    try {
      NGOpartnerData.insertMany(query);

    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  }
);

router.post(
  "/writeVolunteer",
  async (req, res) => {
    const {
      FirstName,
      LastName,
      MobilePhone,
      OrganizationName,
      EmailCleanOut,
      ConnectionId,
      AttendanceStatus,
      Employer,
      VolunteerOpportunityName,
      Type,
      ContactID,
      Age,
      HoursServed
    } = req.body;

    const query = queries.WRITE_VOLUNTEER;

    try {
      volunteerData.insertMany(query);

    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  }
);

router.post(
  "/writeNewVolunteer",
  async (req, res) => {

    const query = queries.WRITE_NEW_VOLUNTEER;

    try {

      newVolunteerData.insertMany(query);

    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  }
);


router.post(
  "/writeHandsOn",
  async (req, res) => {
    const query = queries.WRITE_HANDS_ON;
    try {

      await handsOnData.insertMany(query);

    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  }
);


module.exports = router;