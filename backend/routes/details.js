const router = require("express").Router();
let Employee = require("../models/employee.model");
let Bank = require("../models/bank.model");
let Branch = require("../models/branch.model");

let employee = {};
// let details = [];

const getEmployeeDetails = async (users) => {
  let details = [];
  for (user of users) {
    employee = {};
    employee.empId = user._id.toString();
    employee.empName = user.empName;
    employee.empAddress = user.empAddress;
    employee.empPhoto = user.empPhoto;
    await Branch.findById(user.branchId).then(async (branch) => {
      await Bank.findById(branch.bankId).then((bank) => {
        employee.bank = bank.bankName;
        employee.branch = branch.branchName;
      });
    });
    details.push(employee);
  }

  return details;
};
router.route("/").get((req, res) => {
  Employee.find()
    .then(async (users) => {
      const final = await getEmployeeDetails(users).then((finalDetails) => {
        res.json(finalDetails);
      });
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
