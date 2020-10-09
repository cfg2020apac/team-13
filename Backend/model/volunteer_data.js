const mongoose = require("mongoose");

const VolunteerSchema = mongoose.Schema({
  FirstName:{
    type: String,
    required: false
  },
  LastName:{ 
    type: String,
    required: false
  },
  MobilePhone:{
    type: String,
    required: false
  },
  OrganizationName:{
    type: String,
    required: false
  },
  EmailCleanOut: {
    type: String,
    required: false
  },
  ConnectionId:{
    type: String,
    required: false
  },
  AttendanceStatus:{
    type: String,
      required: false
  },
  Employer:{
    type: String,
    required: false
  },
  VolunteerOpportunityName:{
    type: String,
    required: false
  },
  Type:{
    type: String,
    required: false
  },
  ContactID:{
    type: String,
    required: false
  },
  Age:{
    type: Number,
    required: false
  },
  HoursServed:{
    type: Number,
    required: false
  },

});

// export model user with UserSchema
module.exports = mongoose.model("volunteer_data", VolunteerSchema);
