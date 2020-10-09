const mongoose = require("mongoose");

const handsOnSchema = mongoose.Schema({
  occID:{
      type: Number,
      required: true
  },
  Status:{
      type: String,
      required: true
  },
  PopulationsServed:{
      type: String,
      required: true
  },
  ImpactArea:{
      type: String,
      required: true
  },
  Location:{
      type: String,
      required: true
  },
  Needed: {
      type: Number,
      required: true
  },
  Confirmed: {
    type: Number,
    required: true
  },
  Attended: {
    type: Number,
    required: true
  },
  TotalHours: {
    type: Number,
    required: true
  }
});

// export model user with UserSchema
module.exports = mongoose.model("handsOn", handsOnSchema);