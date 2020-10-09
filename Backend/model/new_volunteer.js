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
    type: String,
      required: true
  },
  Employer:{
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
  Email:{
    type: String,
    required: true
  },
  Mobile_Phone:{
    type: Number,
    required: true
  },
  Primary_Street:{
    type: String,
    required: true
  },
  Primary_City:{
    type: String,
    required: true
  },
  Primary_State:{
    type: String,
    required: true
  },
  Primary_Zip:{
    type: Number,
    required: true
  },
  Gender:{
    type: String,
    required: true
  },
  Ethnicity_Race:{
    type: String,
    required: true
  },
  Volunteer_Type:{
    type: String,
    required: true
  }
});

// export model user with UserSchema
module.exports = mongoose.model("new_volunteer", NewVolunteerSchema);