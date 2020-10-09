const mongoose = require("mongoose");

const SignUpEventSchema = mongoose.Schema({
  Email:{
    type: String,
    required: true
  },
  EventID:{
      type: String,
      required: true
  }
});

// export model user with UserSchema
module.exports = mongoose.model("SignUpEvent", SignUpEventSchema);