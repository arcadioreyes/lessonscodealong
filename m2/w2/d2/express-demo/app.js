/* this allows us to acces the environment variables through the "process.env"*/
require("dotenv").config();
const path = require("path");
const bodyParser = require("body-parser");

const express = require("express");
const app = express();

/*this is importong the PORT used from the .env folder, this is an environment variable*/
const { PORT } = process.env;

app.set("views", "views");
app.set("view engine", "hbs");

/*here we are combining the path in order to do more robust the connexion to the public folder*/
app.use(express.static(path.join(__dirname, "/public")));

/*we can also use this to connect to the public folder, but is going to be weak while deploying*/
//app.use(express.static('public'));

/*Using the body parser with the .use method . The body parser helps express to read what is comming from the form*/
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/*creating our routes*/
app.get("/", (req, res) => {
  res.render("home");
});

/* ":username" is a dynamic parameter. it indicates that ther eis going to be variable value*/
app.get("/profile/:username", (req, res) => {
  console.log(req.params);
  const { username } = req.params;
  // Query the database to find the user with a matching username
  // User.findOne({username: ....}).then(user => res.render('profile', { user }))
  // Send that user indformation to the front end
  res.render("profile", { username });
});

app.get("/search", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
