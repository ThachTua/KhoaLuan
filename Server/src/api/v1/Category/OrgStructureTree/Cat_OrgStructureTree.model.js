const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrgStructureTree = new Schema(
  {
    isRoot: { type: Schema.Types.Number },
    rootID: { type: Schema.Types.String, unique: true },
    listID: { type: Schema.Types.Array },
    listOrgStructure: { type: Schema.Types.Array },
    StructureTree: Object,
  },
  { timestamps: true },
);

const OrgStructureTreeModel = mongoose.model(
  "Cat_OrgStructureTree_T",
  OrgStructureTree,
);

module.exports = OrgStructureTreeModel;