const mongoose = require("mongoose");

const CrowdSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  section_88:{
    type: String,
    required: true
  },
  focus_area:{
    type: String,
    required: true
  },
  served_population_groups:{
    type: String,
    required: true
  },
  description_of_the_served_group: {
    type: String,
    required: true
  },
  covid19_need_for_daily_necessities:{
    type: String,
    required: true
  },
  covid19_need_for_program_ideas:{
      tpye: String,
      required: true
  },
  last_updated:{
    type: String,
    required: true
  },
  remarks:{
    type: String,
    required: true
  },
  location:{
    type: String,
    required: true
  },
  affliliate:{
    type: String,
    required: true
  },
  number_of_staff_under_organization:{
    type: int,
    required: true
  },
  number_of_beneficiary_under_the_organization:{
    type: int,
    required: true
  },
  any_funding:{
    type: String,
    required: true
  },
  methods_to_recruit_volunteers:{
    type: String,
    required: true
  },
  requirement_for_volunteer_recruitment:{
    type: String,
    required: true
  },
  work_with_us_before:{
    type: String,
    required: true
  },
  corporate_calendar_probono_skillbased:{
    type: Boolean,
    required: false
  },
  year_of_cooperation:{
    type: String,
    required: false
  },
  details_for_previous_experience:{
    type: String,
    required: false
  },
  suggestions_for_past_experience:{
    type: String,
    required: true
  },
  coporate_program_wish_list:{
    type: String,
    required: true
  },
  suggested_notice_period_for_proposal:{
    type: String,
    required: true
  },
  remarks_policy_after_confirmation_that_need_to_be_aware:{
    type: String,
    required: false
  },
  calendar_grant_program_wish_list:{
    type: String,
    required: true
  },
  material_hardware_wish_list:{
    type: String,
    required: true
  },
  skillbased_volunteers_probono_workshop_needs:{
    type: String,
    required: true
  },
  facilities_rooms_for_program:{
    type: String,
    required: true
  },
  contact_person_name:{
    type: String,
    required: true
  },
  contact:{
    type: int,
    required: true
  },
  sat_year:{
    type: int,
    required: true
  },
  meeting_date_time:{
    type: String,
    required: true
  },
  note_update_date:{
    type: String,
    required: true
  }

});

// export model user with UserSchema
module.exports = mongoose.model("Crowd", CrowdSchema);