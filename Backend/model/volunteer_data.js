const mongoose = require("mongoose");

const CrowdSchema = mongoose.Schema({
  email:{
    type: String,
    required: true
  },
  name:{
    type: String,
    required: true
  },
  mobilePhone:{
    type: Number,
    required: true
  },
  OrganizationServed:{
    type: String,
    required: true
  },
  Employer: {
    type: String,
    required: true
  },
  HoursServed:{
    type: Number,
    required: true
  },
  Age:{
      tpye: Number,
      required: true
  }
});

// export model user with UserSchema
module.exports = mongoose.model("Crowd", CrowdSchema);