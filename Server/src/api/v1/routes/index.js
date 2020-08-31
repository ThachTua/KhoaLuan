const express = require("express");

const UserRoute = require("../User/User.route");
const RoleRoute = require("../Role/Role.route");
const ProfileRoute = require("../HumanResourceExecutive/Profile/Hre_Profile.route");
const ContractRoute = require("../HumanResourceExecutive/Contract/Hre_Contract.route");
const StopWorkingRoute = require("../HumanResourceExecutive/StopWorking/Hre_StopWorking.route");

const OrgStructureRoute = require("../Category/OrgStructure/Cat_OrgStructure.route");
const OrgStructureTreeRoute = require("../Category/OrgStructureTree/Cat_OrgStructureTree.route");
const PositionRoute = require("../Category/Position/Cat_Position.route");

const RouterV1 = express.Router();

/**
 * System
 */
RouterV1.use("/users", UserRoute);
RouterV1.use("/roles", RoleRoute);

/**
 * Hre
 */
RouterV1.use("/profiles", ProfileRoute);
RouterV1.use("/contracts", ContractRoute);
RouterV1.use("/stop-workings", StopWorkingRoute);

/**
 * Cat
 */
RouterV1.use("/org-structures", OrgStructureRoute);
RouterV1.use("/org-structures-tree", OrgStructureTreeRoute);
RouterV1.use("/positions", PositionRoute);

module.exports = RouterV1;
