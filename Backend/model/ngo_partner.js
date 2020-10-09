const mongoose = require("mongoose");

const NGOPartnerSchema = mongoose.Schema({
  OrganizationName:{
    type: String,
    required: false
  },
  Section88:{
    type: String,
    required: false
  },
  FocusArea:{
    type: String,
    required: false
  },
  ServedPopulationGroups:{
    type: String,
    required: false
  },
  DescriptionServedGroup: {
    type: String,
    required: false
  },
  Covid19DailyNecessities:{
    type: String,
    required: false
  },
  Covid19ProgramIdeas:{
      tpye: String,
      required: false
  },
  LastUpdated:{
    type: String,
    required: false
  },
  Remarks:{
    type: String,
    required: false
  },
  Location:{
    type: String,
    required: false
  },
  Affliliate:{
    type: String,
    required: false
  },
  NumberOfStaff:{
    type: Number,
    required: false
  },
  NumberOfBeneficiary:{
    type: Number,
    required: false
  },
  Funding:{
    type: String,
    required: false
  },
  MethodsToRecruit:{
    type: String,
    required: false
  },
  Requirements:{
    type: String,
    required: false
  },
  WorkWithUsBefore:{
    type: String,
    required: false
  }
});

// export model user with UserSchema
module.exports = mongoose.model("ngo_partner", NGOPartnerSchema);