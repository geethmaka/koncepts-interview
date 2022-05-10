const router = require("express").Router();
let Branch = require("../models/branch.model");

router.route("/").get((req, res) => {
  Branch.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const branchName = req.body.branchName;
  const branchAddress = req.body.branchAddress;
  const bankId = req.body.bankId;

  const newBranch = new Branch({ branchName, branchAddress, bankId });

  newBranch
    .save()
    .then(() => res.json("Branch added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
