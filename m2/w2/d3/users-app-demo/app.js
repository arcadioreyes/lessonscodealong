const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User.model");

const app = express();

app.set("views", "./views");
app.set("view engine", "hbs");

mongoose
  .connect("mongodb://localhost/users-app")
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.render("signup");
});

app.listen(3000, () => console.log("example app is on port 3000"));
