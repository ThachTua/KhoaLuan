const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Cat_OrgStructureSchema = new Schema({
  ID: { type: Schema.Types.String },
  OrgStructureName: { type: Schema.Types.String },
  OrgStructureNameEN: { type: Schema.Types.String },
  Code: { type: Schema.Types.String },
  CodeBranch: { type: Schema.Types.String },
  IsRoot: { type: Schema.Types.String },
  StandardWdType: { type: Schema.Types.String },
  DateStart: { type: Schema.Types.String },
  MonthStart: { type: Schema.Types.String },
  AddressDetail: { type: Schema.Types.String },
  Phone: { type: Schema.Types.String },
  Description: { type: Schema.Types.String },
  TypeID: { type: Schema.Types.String },
  ParentID: { type: Schema.Types.String },
  BranchID: { type: Schema.Types.String },
  ServerID: { type: Schema.Types.String },
  OrderNumber: { type: Schema.Types.String },
  OrderOrg: { type: Schema.Types.String },
  ServerUpdate: { type: Schema.Types.String },
  ServerCreate: { type: Schema.Types.String },
  UserUpdate: { type: Schema.Types.String },
  UserCreate: { type: Schema.Types.String },
  DateCreate: { type: Schema.Types.String },
  DateUpdate: { type: Schema.Types.String },
  UserLockID: { type: Schema.Types.String },
  DateLock: { type: Schema.Types.String },
  IsDelete: { type: Schema.Types.String },
  IPCreate: { type: Schema.Types.String },
  IPUpdate: { type: Schema.Types.String },
  FoundationDate: { type: Schema.Types.String },
  ProfessionalActivities: { type: Schema.Types.String },
  FuntionDescription: { type: Schema.Types.String },
  TerminationDate: { type: Schema.Types.String },
  Status: { type: Schema.Types.String },
  HeadCountPlan: { type: Schema.Types.String },
  Budget: { type: Schema.Types.String },
  DecisionNo: { type: Schema.Types.String },
  DecisionDate: { type: Schema.Types.String },
  DecisionBy: { type: Schema.Types.String },
  DateExpected: { type: Schema.Types.String },
  Fax: { type: Schema.Types.String },
  GroupCostCentreID: { type: Schema.Types.String },
  OrderExcel: { type: Schema.Types.String },
  MonShiftID: { type: Schema.Types.String },
  TueShiftID: { type: Schema.Types.String },
  WedShiftID: { type: Schema.Types.String },
  ThuShiftID: { type: Schema.Types.String },
  FriShiftID: { type: Schema.Types.String },
  SatShiftID: { type: Schema.Types.String },
  SunShiftID: { type: Schema.Types.String },
  HeadDeptID: { type: Schema.Types.String },
  OrgGroupName: { type: Schema.Types.String },
  Email: { type: Schema.Types.String },
  Website: { type: Schema.Types.String },
  FileAttach: { type: Schema.Types.String },
  CodePath: { type: Schema.Types.String },
  OrgNamePath: { type: Schema.Types.String },
  OrgStructureTypeID: { type: Schema.Types.String },
  TypeDurationID: { type: Schema.Types.String },
  RegionID: { type: Schema.Types.String },
  OrgFullName: { type: Schema.Types.String },
  SalaryDepartmentRate: { type: Schema.Types.String },
  OrgStructureOtherName: { type: Schema.Types.String },
  SortID: { type: Schema.Types.String },
  RosterGroup: { type: Schema.Types.String },
  HeadOrgProfileID: { type: Schema.Types.String },
  CompanyID: { type: Schema.Types.String },
  Color: { type: Schema.Types.String },
  OrgColor: { type: Schema.Types.String },
  Logo: { type: Schema.Types.String },
  OrderIndex: { type: Schema.Types.String },
  OrgUnitID: { type: Schema.Types.String },
  AreaPostJobWorkID: { type: Schema.Types.String },
  ConveyorID: { type: Schema.Types.String },
  WorkPlaceID: { type: Schema.Types.String },
});

const Cat_OrgStructureModel = mongoose.model(
  "Cat_OrgStructure",
  Cat_OrgStructureSchema,
);

module.exports = Cat_OrgStructureModel;
