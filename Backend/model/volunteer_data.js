const mongoose = require("mongoose");

const VolunteerSchema = mongoose.Schema({
  First_name:{
    type: String,
    required: true
  },
  Last_Name:{ 
    type: String,
    required: true
  },
  Mobile_Phone:{
    type: Number,
    required: true
  },
  Organization_Name:{
    type: String,
    required: true
  },
  Email_Clean_Out: {
    type: String,
    required: true
  },
  Connection_Id:{
    type: String,
    required: true
  },
  Attendance_Status:{
      tpye: String,
      required: true
  },
  Employer:{
    tpye: String,
    required: true
  },
  Attendance_Status:{
    tpye: String,
    required: true
  },
  Volunteer_Opportunity_Name:{
    tpye: String,
    required: true
  },
  Organization_Name:{
    tpye: String,
    required: true
  },
  Type:{
    tpye: String,
    required: true
  },
  Contact_ID:{
    type: String,
    required: true
  },
  Age:{
    type: Number,
    required: true
  },
  Hours_Served:{
    type: Number,
    required: true
  },

});

// export model user with UserSchema
module.exports = mongoose.model("volunteer_data", VolunteerSchema);
