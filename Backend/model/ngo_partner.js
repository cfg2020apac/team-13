const mongoose = require("mongoose");

const NGOPartner = mongoose.Schema({
  OrganizationName:{
    type: String,
    required: true
  },
  Section88:{
    type: String,
    required: true
  },
  FocusArea:{
    type: String,
    required: true
  },
  ServedPopulationGroups:{
    type: String,
    required: true
  },
  DescriptionServedGroup: {
    type: String,
    required: true
  },
  Covid19DailyNecessities:{
    type: String,
    required: true
  },
  Covid19ProgramIdeas:{
      tpye: String,
      required: true
  },
  LastUpdated:{
    type: String,
    required: true
  },
  Remarks:{
    type: String,
    required: true
  },
  Location:{
    type: String,
    required: true
  },
  Affliliate:{
    type: String,
    required: true
  },
  NumberOfStaff:{
    type: Number,
    required: true
  },
  NumberOfBeneficiary:{
    type: Number,
    required: true
  },
  Funding:{
    type: String,
    required: true
  },
  MethodsToRecruit:{
    type: String,
    required: true
  },
  Requirements:{
    type: String,
    required: true
  },
  WorkWithUsBefore:{
    type: String,
    required: true
  }
});

// export model user with UserSchema
module.exports = mongoose.model("ngo_partner", NGOPartnerSchema);