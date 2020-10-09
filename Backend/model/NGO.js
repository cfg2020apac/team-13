const mongoose = require("mongoose");

const NGOSchema = mongoose.Schema({
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
  Location:{
    type: String,
    required: true
  },
  Mobile:{
    type: Number,
    required: false
  },
});

// export model user with UserSchema
module.exports = mongoose.model("NGO", NGOSchema);