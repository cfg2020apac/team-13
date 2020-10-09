const mongoose = require("mongoose");

const OpeningSchema = mongoose.Schema({
  EventID:{
      type: String,
      required: true
  },
  NGOName:{
      type: String,
      required: true
  },
  Title:{
    type: String,
    required: true
  },
  Description:{
      type: String,
      required: true
  },
  Location:{
    type: String,
    required: true
  },
  Start:{
    type: Date,
    required: true
  },
  End:{
    type: Date,
    required: true
  },
  Needed:{
      type: Number,
      required: true
  },
  AgeRequirement: {
      type: Number,
      required: false,
      default: 0
  },
  CurrentlySignedUp: {
      type: Number,
      required: false,
      default: 0
  }
});

// export model user with UserSchema
module.exports = mongoose.model("opening", OpeningSchema);