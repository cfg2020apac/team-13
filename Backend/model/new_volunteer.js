const mongoose = require("mongoose");

const NewVolunteerSchema = mongoose.Schema({
  ContactID:{
    type: String,
    required: true
  },
  Salutation:{
    type: String,
    required: true
  },
  FirstName:{
    type: String,
    required: true
  },
  LastName:{
    type: String,
    required: true
  },
  HOHKNewsletterOptin:{
    type: Number,
    required: False
  },
  Title:{
    type: String,
    required: true
  },
  ContactType:{
      tpye: String,
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
  HoursServed:{
    tpye: Number,
    required: true
  },
  Email:{
    type: String,
    required: true
  },
  MobilePhone:{
    tpye: Number,
    required: true
  },
  PrimaryStreet:{
    tpye: String,
    required: true
  },
  PrimaryCity:{
    tpye: String,
    required: true
  },
  PrimaryState:{
    tpye: String,
    required: true
  },
  PrimaryZip:{
    tpye: Number,
    required: true
  },
  Gender:{
    type: String,
    required: true
  },
  EthnicityRace:{
    tpye: String,
    required: true
  },
  VolunteerType:{
    tpye: String,
    required: true
  },
  OrganizationName:{
    tpye: String,
    required: true
  }
});

// export model user with UserSchema
module.exports = mongoose.model("new_volunteer", NewVolunteerSchema);