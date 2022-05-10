const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  empName: {
    type: String,
    required: true,
  },
  empEmail: {
    type: String,
    required: true,
  },
  empAddress: { type: String, required: true },
  empPassword: { type: String, required: true },
  empPhoto: { type: String, required: true },
  bankId: { type: String, required: true },
  branchId: { type: String, required: true },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
