const mongoose = require("mongoose");

const NewVolunteerSchema = mongoose.Schema({
  Contact_ID:{
    type: String,
    required: true
  },
  Salutation:{
    type: String,
    required: true
  },
  First_Name:{
    type: String,
    required: true
  },
  Last_Name:{
    type: String,
    required: true
  },
  HOHK_Newsletter_Optin:{
    type: Number,
    required: False
  },
  Title:{
    type: String,
    required: true
  },
  Contact_Type:{
      tpye: String,
      required: true
  },
  Employer:{
    tpye: String,
    required: true
  },
  Age:{
    tpye: Number,
    required: true
  },
  Hours_Served:{
    tpye: Number,
    required: true
  },
  Email:{
    tpye: String,
    required: true
  },
  Mobile_Phone:{
    tpye: Number,
    required: true
  },
  Primary_Street:{
    tpye: String,
    required: true
  },
  Primary_City:{
    tpye: String,
    required: true
  },
  Primary_State:{
    tpye: String,
    required: true
  },
  Primary_Zip:{
    tpye: Number,
    required: true
  },
  Gender:{
    tpye: String,
    required: true
  },
  Ethnicity_Race:{
    tpye: String,
    required: true
  },
  Volunteer_Type:{
    tpye: String,
    required: true
  },
  Organization_Name:{
    tpye: String,
    required: true
  }
});

// export model user with UserSchema
module.exports = mongoose.model("NewVolunteer", NewVolunteerSchema);