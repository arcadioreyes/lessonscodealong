const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose");

/*this is importing our model from our models folder*/
const User = require("./models/User.model");
console.log(User);

mongoose
  .connect("mongodb://localhost/mongoose-demo2")
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  /*the following 2 .then lines help us to get all users as an array of objects*/
  //   .then(() => User.find())
  //   .then((allUsers) => console.log(allUsers))

  /*the following 2 .then lines help us to get all users as an array of objects and assign them to a const*/
  .then(() => User.find())
  .then((allUsers) => {
    const users = allUsers;
    return users;
  })
  .then((passedUsers) => console.log("passedUsers", passedUsers))

  /*the following 2 .then help us to create a user*/
  //   .then(() =>
  //     User.create({
  //       username: "PaulFresnel",
  //       email: "paulfresnel@gmail.com",
  //       password: "hakduenkc",
  //     })
  //   )
  //   .then((newUser) => console.log("newUser was created sccessfully", newUser))
  .then(() => mongoose.connection.close())
  .catch((err) => console.error("Error connecting to mongo", err));
