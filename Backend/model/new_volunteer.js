const mongoose = require("mongoose");

const NewVolunteerSchema = mongoose.Schema({
  ContactID:{
    type: String,
    required: false
  },
  Salutation:{
    type: String,
    required: false
  },
  FirstName:{
    type: String,
    required: false
  },
  LastName:{
    type: String,
    required: false
  },
  HOHKNewsletterOptin:{
    type: Number,
    required: false
  },
  Title:{
    type: String,
    required: false
  },
  ContactType:{
      tpye: String,
      required: false
  },
  Employer:{
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
  Email:{
    type: String,
    required: false
  },
  MobilePhone:{
    type: Number,
    required: false
  },
  PrimaryStreet:{
    type: String,
    required: false
  },
  PrimaryCity:{
    type: String,
    required: false
  },
  PrimaryState:{
    type: String,
    required: false
  },
  PrimaryZip:{
    type: Number,
    required: false
  },
  Gender:{
    type: String,
    required: false
  },
  EthnicityRace:{
    type: String,
    required: false
  },
  VolunteerType:{
    type: String,
    required: false
  },
  OrganizationName:{
    type: String,
    required: false
  }
});

// export model user with UserSchema
module.exports = mongoose.model("new_volunteer", NewVolunteerSchema);