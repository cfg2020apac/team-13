const express = require("express");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require("../middleware/auth");
const NGO = require("../model/NGO");
const User = require("../model/user");
const Opening = require("../model/opening")

router.post("/createOpening", auth, async (req, res) => {
    const ngo = await NGO.findById(req.ngo.id);
    //console.log(ngo);
    const {
        Title,
        Description,
        Location,
        Start,
        End,
        Needed,
        AgeRequirement
    } = req.body;
    try {
        let a = await Opening.findOne({
            Title
          });
        //console.log(a);
        if (a) {
            return res.status(400).json({
              msg: "Opening Already Exists"
            });
          }
      var x = Math.random().toString(36).substring(7);
      const EventID = x;
      const NGOName = ngo.Name;
      const CurrentlySignedUp = 0;
      //console.log(x);
      //console.log(Start);
      //console.log(End);
      let event = new Opening({
        EventID,
        NGOName,
        Title,
        Description,
        Location,
        Start,
        End,
        Needed,
        AgeRequirement,
        CurrentlySignedUp
      });
      //console.log(event);
      await event.save();
      res.send({ message: "Created Opening!" });
    }
    catch (e) {
      console.log(e);
      res.send({ message: "Unable to save posting." });
    }
  });

router.post("/NGOsignup", async (req, res) => {     
    const {
      Email,
      Password,
      Name,
      Location,
      Mobile
    } = req.body;

   try {
        let ngo = await NGO.findOne({
          Email
        });
        
        if (ngo) {
          return res.status(400).json({
            msg: "NGO Already Exists"
          });
        }
        // console.log("HERE, USER NOT EXISTING!");
        ngo = new NGO({
            Email,
            Password,
            Name,
            Location,
            Mobile
        });
        
        const salt = await bcrypt.genSalt(10);
        ngo.Password = await bcrypt.hash(Password, salt);

        await ngo.save();
        const payload = {
            ngo: {
            id: ngo.id
          }
        };

        jwt.sign(
          payload,
          "randomString", {
          expiresIn: 2592000
        },
          (err, token) => {
            if (err) { throw err; }
            //console.log(token);
            res.status(200).json({
              token
            });
          }
        );
      } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
      }
    }
);

router.post("/NGOlogin",
    [ check("Email", "Please enter a username").isLength({ min: 1 }),
      check("Password", "Please enter a valid password").isLength({
        min: 6
      })
    ],
    async (req, res) => {

      const { Email, Password } = req.body;
      try {
        let ngo = await NGO.findOne({
          Email
        });
        if (!ngo)
          return res.status(400).json({
            message: "NGO Not Exist"
          });
  
        const isMatch = await bcrypt.compare(Password, ngo.Password);
        if (!isMatch)
          return res.status(400).json({
            message: "Incorrect Password !"
          });
  
        const payload = {
            ngo: {
            id: ngo.id
          }
        };

        jwt.sign(
          payload,
          "randomString",
          {
            expiresIn: 2592000
          },
          (err, token) => {
            if (err) { throw err; }
            res.status(200).json({
              token 
            });
          }
        );
      } catch (e) {
        console.error(e);
        res.status(500).json({
          message: "Server Error"
        });
      }
    }
  );

router.post("/signup", async (req, res) => {     
      const {
        Email,
        Password,
        Name,
        Age,
        Gender,
        Mobile,
        Location
      } = req.body;

     try {
          let person = await User.findOne({
            Email
          });
          
          if (person) {
            return res.status(400).json({
              msg: "User Already Exists"
            });
          }
          // console.log("HERE, USER NOT EXISTING!");
          person = new User({
            Email,
            Password,
            Name,
            Age,
            Gender,
            Mobile,
            Location
          });
          
          const salt = await bcrypt.genSalt(10);
          person.Password = await bcrypt.hash(Password, salt);
  
          await person.save();
          const payload = {
            user: {
              id: person.id
            }
          };
  
          jwt.sign(
            payload,
            "randomString", {
            expiresIn: 2592000
          },
            (err, token) => {
              if (err) { throw err; }
              //console.log(token);
              res.status(200).json({
                token
              });
            }
          );
        } catch (err) {
          console.log(err.message);
          res.status(500).send("Error in Saving");
        }
      }
  );

// USER LOGIN POST REQUEST

router.post("/login",
    [ check("Email", "Please enter a username").isLength({ min: 1 }),
      check("Password", "Please enter a valid password").isLength({
        min: 6
      })
    ],
    async (req, res) => {

      const { Email, Password } = req.body;
      try {
        let person = await User.findOne({
          Email
        });
        if (!person)
          return res.status(400).json({
            message: "User Not Exist"
          });
  
        const isMatch = await bcrypt.compare(Password, person.Password);
        if (!isMatch)
          return res.status(400).json({
            message: "Incorrect Password !"
          });
  
        const payload = {
          person: {
            id: person.id
          }
        };

        jwt.sign(
          payload,
          "randomString",
          {
            expiresIn: 2592000
          },
          (err, token) => {
            if (err) { throw err; }
            res.status(200).json({
              token 
            });
          }
        );
      } catch (e) {
        console.error(e);
        res.status(500).json({
          message: "Server Error"
        });
      }
    }
  );
  


  module.exports = router;