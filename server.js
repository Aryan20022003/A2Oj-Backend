const express = require("express");
const app = express();
const cors = require("cors");
const codeController = require("./controller/codeController");
const userController = require("./controller/userController");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const DB = process.env.DB.replace("<PASSWORD>", process.env.PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "CP",
  })
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

app.post("/run", codeController);

app.get("/user", userController.getUser);
app.post("/user/:userId", userController.createUser);

app.get("/isitworking", (req, res) => {
  res.send("pong");
});

app.use((error, req, res, next) => {
  error.status = error.status || 500;
  res.status(error.status).json(error);
});

app.listen(3579, () => console.log("Server running on port 3579"));
