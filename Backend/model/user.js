const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  Email:{
    type: String,
    required: true
  },
  Password:{
      type: String,
      required: true
  },
  Name:{
    type: String,
    required: true
  },
  Age:{
    type: Number,
    required: true
  },
  Gender:{
    type: String,
    required: true
  },
  Mobile:{
    type: Number,
    required: false
  },
  Location:{
    type: String,
    required: true
  }
});

// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);