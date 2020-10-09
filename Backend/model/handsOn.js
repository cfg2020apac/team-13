const mongoose = require("mongoose");

const handsOnSchema = mongoose.Schema({
  OccurenceID:{
      type: String,
      required: false
  },
  Status:{
      type: String,
      required: false
  },
  TotalHoursServed:{
      type: Number,
      required: false
  },
  PopulationsServed:{
      type: String,
      required: false
  },
  ImpactArea:{
      type: String,
      required: false
  },
  VolunteerOpportunityName:{
      type: String,
      required: false
  },
  Location:{
      type: String,
      required: false
  },
  VolunteerLeaderNeeded: {
      type: Number,
      required: false
  },
  MaxAttendance:{
      type: Number,
      required: false
  },
  MinAttendance:{
    type: Number,
    required: false
  },
  VolunteerStillNeeded: {
    type: Number,
    required: false
},
  Confirmed: {
    type: Number,
    required: false
  },
  Attended: {
    type: Number,
    required: false
  },
  HoursServed: {
    type: Number,
    required: false
  },
  RecordID:{
    type: String,
    required: false
  }
});

// export model user with UserSchema
module.exports = mongoose.model("handsOn", handsOnSchema);