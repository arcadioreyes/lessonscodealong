/* loads axios package*/
const axios = require("axios");
/* loads express package*/
const express = require("express");

/*loads hbs package*/
const hbs = require("hbs");

/* this executes an express server*/
const app = express();

/* defining our server port*/
const port = 3000;

/* express method to specify the views directory*/
app.set("views", __dirname + "/views");

/* express method to register the template engine. we are assigning here handlebars(hbs) to be our template engine*/
app.set("view engine", "hbs");

/*registering the partials file. communicating to hbs where ar emy partials */
hbs.registerPartials(__dirname + "/views/partials");

/*Make everything inside of public/ available.the use method help us to configure express. configure step whiwh tells where my static files are located */
app.use(express.static("public"));

/* This is defining my pages'routes. Method res.render helps to render a template engine. template engines help to send data to the client */
app.get("/", (req, res) => {
  const data = {
    firstName: "Lloyd",
    lastName: "Chambrier",
    address: {
      street: "Rue Fausse",
      number: 24,
    },
    likesBanana: false,
    likesCoffee: false,
    citiesLived: ["London", "Oxford", "Chennai", "Amsterdam"],
  };
  res.render("index", data);
});

app.get("/about", (req, res) => {
  const data2 = {
    firstName: "Arcadio",
    lastName: "Reyes",
    address: {
      street: "Rue Inderdite",
      number: 42,
    },
    likesBanana: false,
    likesCoffee: false,
    citiesLived: ["Mexico", "Paris", "Aix-en-Provence", "Bakersfield"],
  };
  res.render("about", data2);

  /*Setting the layout to false will exclude this route from the layout's scope*/
  //   res.render("about", { layout: false });
});

app.get("/dogs", (req, res) => {
  axios
    .get("http://dog-api.kinduff.com/api/facts?number=3") //requesting data from the API
    .then((apiResponse) => {
      const dogFacts = apiResponse.data.facts; //storing facts grom the API response
      res.render("dogs", { dogFacts: dogFacts }); // rendering the view with the data
    })

    .catch((err) => console.log(err));
});

app.get("/zoo", (req, res) => {
  axios
    .get("https://zoo-animal-api.herokuapp.com/animals/rand") //requesting data from the API
    .then((apiResponse) => {
      const zooFacts = apiResponse.data; //storing facts grom the API response
      res.render("zoo", { zooFacts: zooFacts }); // rendering the view with the data
    })

    .catch((err) => console.log(err));
});

/* this allows incoming requests from clients*/
app.listen(port, () => {
  console.log(`recap-demo app listening on port ${port}`);
});
