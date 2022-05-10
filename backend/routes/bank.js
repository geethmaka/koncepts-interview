const router = require("express").Router();
let Bank = require("../models/bank.model");

router.route("/").get((req, res) => {
  Bank.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const bankName = req.body.bankName;

  const newBank = new Bank({ bankName });

  newBank
    .save()
    .then(() => res.json("Bank added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
