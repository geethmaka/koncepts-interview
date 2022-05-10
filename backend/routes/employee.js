const router = require("express").Router();
let Employee = require("../models/employee.model");
const CryptoJS = require("crypto-js");
require("dotenv").config();
const multer = require("multer");

const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, Math.random() + file.originalname);
  },
});

const upload = multer({ storage: Storage });

router.route("/").get((req, res) => {
  Employee.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/login").post((req, res) => {
  Employee.find(req.body.email)
    .then((users) => {
      for (user of users) {
        const decrypted = CryptoJS.AES.decrypt(
          user.empPassword,
          `${process.env.KEY}`
        ).toString(CryptoJS.enc.Utf8);
        if (req.body.password == decrypted) {
          res.send("granted");
        }
      }
      res.send("denied");
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/add", upload.single("empPhoto"), async (req, res) => {
  const empName = req.body.empName;
  const empEmail = req.body.empEmail;
  const empAddress = req.body.empAddress;
  const empPhoto = req.file.path.replace(/\\/g, "/");
  const bankId = req.body.bankId;
  const branchId = req.body.branchId;

  const empPassword = CryptoJS.AES.encrypt(
    req.body.empPassword,
    `${process.env.KEY}`
  );

  const newEmployee = new Employee({
    empName,
    empEmail,
    empAddress,
    empPassword,
    empPhoto,
    bankId,
    branchId,
  });

  newEmployee
    .save()
    .then(() => res.json("Employee added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
