const express = require("express");



const ProfileRoute = require("./Hre_Profile.route");
const Hre_CollaborateRoute = require("./Hre_Collaborate.route");
const PositionRoute = require("./Cat_Position.route");
const OrgUnitRoute = require("./Cat_OrgUnit.route");
const OrgStructureRoute = require("./Cat_OrgStructure.route");
const ContractTypeRoute = require("./Cat_ContractType.route");
const WorkHistoryRoute = require("./Hre_WorkHistory.route");
const StopWorkingRoute = require("./Hre_StopWorking.route");
const HreContractRoute = require("./Hre_Contract.route");

const HreContractExtend = require("./Hre_ContractExtend.route");

const TimeKeepingDayRoute = require("./Att_TimeKeepingDay.route");

const TimeKeepingGroupRoute = require("./Att_TimeKeepingGroup.route");
const SalaryRoute = require("./Att_Salary.route");
const LeaveRoute = require("./Att_LeaveDay.route");

const NewStaffRoute = require("./NewStaff.route");
const ProfileQualificationRoute = require("./Hre_ProfileQualification.route");
const routeExport = require("./routeExport");

const routeAPI = express.Router();
routeAPI.use("/positions", PositionRoute);
routeAPI.use("/profiles", ProfileRoute);
//routeAPI.use("/t-profiles", T_ProfileRoute);
routeAPI.use("/hre-collaborates", Hre_CollaborateRoute);

routeAPI.use("/org-structures", OrgStructureRoute);
routeAPI.use("/org-units", OrgUnitRoute);
routeAPI.use("/work-histories", WorkHistoryRoute);
routeAPI.use("/stop-workings", StopWorkingRoute);
routeAPI.use("/contract-types", ContractTypeRoute);
routeAPI.use("/hre-contract", HreContractRoute);
routeAPI.use("/hre-contract-extend", HreContractExtend);
routeAPI.use("/new-staff", NewStaffRoute);
routeAPI.use("/profile-qualification", ProfileQualificationRoute);

routeAPI.use("/timekeeping-days", TimeKeepingDayRoute);

routeAPI.use("/leave-days", LeaveRoute);

routeAPI.use("/timekeeping-groups", TimeKeepingGroupRoute);

routeAPI.use("/salarys", SalaryRoute);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const pdf = require("html-pdf");
const pdfTemplate = require("../ExportFile/documents/Contract");

routeAPI.post("/create-pdf", (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
    if (err) {
      res.send(Promise.reject());
    }
    res.send(Promise.resolve());
  });
});

routeAPI.use(routeExport);

routeAPI.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}../../../result.pdf`);
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = routeAPI;
