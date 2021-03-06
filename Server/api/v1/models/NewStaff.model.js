const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewStaffSchema = new Schema({
  //ProfileID: { type: Schema.Types.String },//
  ProfileName: { type: Schema.Types.String },
  NameFamily: { type: Schema.Types.String },
  FirstName: { type: Schema.Types.String },
  NameEnglish: { type: Schema.Types.String },
  Gender: { type: Schema.Types.String },
  DateOfBirth: { type: Schema.Types.Date },
  PlaceOfBirth: { type: Schema.Types.String },
  IDNo: { type: Schema.Types.String },
  IDDateOfIssue: { type: Schema.Types.Date },
  IDPlaceOfIssue: { type: Schema.Types.String },
  CodeEmp: { type: Schema.Types.String },//
  CodeTax: { type: Schema.Types.String },
 //CodeAttendance: { type: Schema.Types.String },//
  StatusSyn: { type: Schema.Types.String },
  DateHire: { type: Schema.Types.Date },
 //DateEndProbation: { type: Schema.Types.Date },//

  PassportNo: { type: Schema.Types.String },
  PassportDateOfExpiry: { type: Schema.Types.Date },
  PassportDateOfIssue: { type: Schema.Types.Date },
  PassportPlaceOfIssue: { type: Schema.Types.String },
  Cellphone: { type: Schema.Types.String },
  DateOfEffect: { type: Schema.Types.Date },
  PAddress: { type: Schema.Types.String },
  DayOfBirth: { type: Schema.Types.Number },
  MonthOfBirth: { type: Schema.Types.Number },
  YearOfBirth: { type: Schema.Types.Number },
  MarriageStatus: { type: Schema.Types.String },
  NationalityID: { type: Schema.Types.String },
  EthnicID: { type: Schema.Types.String },
  ReligionID: { type: Schema.Types.String },
  UserUpdate: { type: Schema.Types.String },
  UserCreate: { type: Schema.Types.String },
  DateCreate: { type: Schema.Types.Date },
  DateUpdate: { type: Schema.Types.Date },
  WorkPlaceID: { type: Schema.Types.String },
  DateApplyAttendanceCode: { type: Schema.Types.Date },
  IsBlackList: { type: Schema.Types.Number,
    default:0
  }, 
  OrgStructureID:{ type: Schema.Types.String },
  PositionName:{ type: Schema.Types.String },
  PositionID:{ type: Schema.Types.String },
  //Orther: { type: Schema.Types.String },
});
const NewStaffModel = mongoose.model("New_Hre_Profiles", NewStaffSchema);

module.exports = NewStaffModel;
