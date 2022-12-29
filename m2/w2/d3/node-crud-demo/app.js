require("dotenv").config();

const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/library-project")
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const app = express();

// Middleware Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/book.route"));

module.exports = app;
