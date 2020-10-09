const mongoose = require("mongoose");

const VolunteerSchema = mongoose.Schema({
  FirstName:{
    type: String,
    required: true
  },
  LastName:{ 
    type: String,
    required: true
  },
  MobilePhone:{
    type: Number,
    required: true
  },
  OrganizationName:{
    type: String,
    required: true
  },
  EmailCleanOut: {
    type: String,
    required: true
  },
  ConnectionId:{
    type: String,
    required: true
  },
  AttendanceStatus:{
    type: String,
      required: true
  },
  Employer:{
    type: String,
    required: true
  },
  VolunteerOpportunityName:{
    type: String,
    required: true
  },
  Type:{
    type: String,
    required: true
  },
  ContactID:{
    type: String,
    required: true
  },
  Age:{
    type: Number,
    required: true
  },
  HoursServed:{
    type: Number,
    required: true
  },

});

// export model user with UserSchema
module.exports = mongoose.model("volunteer_data", VolunteerSchema);
