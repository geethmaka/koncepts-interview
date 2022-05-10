const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const branchSchema = new Schema({
  branchName: {
    type: String,
    required: true,
  },
  branchAddress: {
    type: String,
    required: true,
  },
  bankId: { type: String, required: true },
});

const Branch = mongoose.model("Branch", branchSchema);

module.exports = Branch;
