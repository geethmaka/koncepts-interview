const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = 5000; //process.env.PORT ||

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const bankRouter = require("./routes/bank");
const branchRouter = require("./routes/branch");
const employeeRouter = require("./routes/employee");
const detailsRouter = require("./routes/details");

app.use("/bank", bankRouter);
app.use("/branch", branchRouter);
app.use("/employee", employeeRouter);
app.use("/details", detailsRouter);
app.use("/uploads", express.static("uploads"));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
