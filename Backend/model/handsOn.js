const mongoose = require("mongoose");

const handsOnSchema = mongoose.Schema({
  OccurenceID:{
      type: String,
      required: true
  },
  Status:{
      type: String,
      required: true
  },
  TotalHoursServed:{
      type: Number,
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
  VolunteerOpportunityName:{
      type: String,
      required: true
  },
  Location:{
      type: String,
      required: true
  },
  VolunteerLeaderNeeded: {
      type: Number,
      required: true
  },
  MaxAttendance:{
      type: Number,
      required: true
  },
  MinAttendance:{
    type: Number,
    required: true
  },
  VolunteerStillNeeded: {
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
  HoursServed: {
    type: Number,
    required: true
  },
  RecordID:{
    type: String,
    required: true
  }
});

// export model user with UserSchema
module.exports = mongoose.model("handsOn", handsOnSchema);