const express = require("express");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const handsOn = require("../model/handsOn");
const volunteerData = require("../model/volunteer_data");

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

  module.exports = router;