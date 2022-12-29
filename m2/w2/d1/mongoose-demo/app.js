const mongoose = require("mongoose"); //loads mongoose

const catSchema = new mongoose.Schema({ name: "string", size: "string" }); // collection definition
const Cat = mongoose.model("cat", catSchema); // Cat model definition

const userSchema = new mongoose.Schema({
  firstName: "string",
  lastName: "string",
}); // collection definition
const User = mongoose.model("user", userSchema); // user model definition

// mongoose
//   .connect("mongodb://localhost/my_database") // conect and creates to our database
//   .then((x) =>
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   )
//   /*this create our user*/
//   .then(() => User.create({ firstName: "Axel", lastName: "Clemente" }))
//   /*this takes the information .create and passes it t to (user).*/
//   .then((user) => console.log("User was successfully created", user))
//   /* this closes the connection with the databse, once we are done of interacting with the database we can close de connectio*/
//   .then(() => mongoose.connection.close())
//   .catch((err) => console.error("Error connecting to mongo", err));

/*the following steps intend to do the same above but inside a function*/

function createUser(firstName, lastName) {
  return (
    mongoose
      .connect("mongodb://localhost/my_database") // conect to my database
      .then((x) =>
        console.log(
          `Connected to Mongo! Database name: "${x.connections[0].name}"`
        )
      )
      /*this create our user*/
      .then(() => User.create({ firstName, lastName }))
      /*this takes the information .create and passes it t to (user).*/
      .then((user) => console.log("User was successfully created", user))
      /* this closes the connection with the databse, once we are done of interacting with the database we can close de connectio*/
      .then(() => mongoose.connection.close())
      .catch((err) => console.error("Error connecting to mongo", err))
  );
}

//createUser("Alfie", "Collins");

/*the following function is to create a cat USING THE .SAVE METHOD*/
function createCat(catName) {
  return mongoose
    .connect("mongodb://localhost/my_database")
    .then((x) =>
      console.log(
        `Connected to Mongo! Database name: "${x.connections[0].name}"`
      )
    )
    .then(() => new Cat({ name: catName }).save())
    .then((newCat) => console.log("Cat was successfully created", newCat))
    .then(() => mongoose.connection.close())
    .catch((err) => console.error("Error connecting to mongo", err));
}

/*the following function is to create MULTIPLE USERS*/

const users = [
  { firstName: "Arcadio", lastName: "Reyes" },
  { firstName: "Miguel", lastName: "Curbelo" },
];

function createUsers(listOfUsers) {
  return mongoose
    .connect("mongodb://localhost/my_database")
    .then((x) =>
      console.log(
        `Connected to Mongo! Database name: "${x.connections[0].name}"`
      )
    )
    .then(() => User.insertMany(listOfUsers))
    .then((users) => console.log("Users was successfully created", users))
    .then(() => mongoose.connection.close())
    .catch((err) => console.error("Error connecting to mongo", err));
}

/*the following function is to get ALL the  USERS*/
function getAllUsers() {
  return mongoose
    .connect("mongodb://localhost/my_database")
    .then(() => User.find())
    .then((users) => console.log("users", users))
    .then(() => mongoose.connection.close())
    .catch((err) => console.error("Error connecting to mongo", err));
}

/*the following function is to get all the  USERS length*/
function getAllUsersLength() {
  return mongoose
    .connect("mongodb://localhost/my_database")
    .then(() => User.find())
    .then((users) => console.log("users length", users.length))
    .then(() => mongoose.connection.close())
    .catch((err) => console.error("Error connecting to mongo", err));
}

/*the following function returns a single user*/
function getSingleUser(enteredName) {
  return (
    mongoose
      .connect("mongodb://localhost/my_database")
      /* this always returns an array of objects that match the 'entered name'*/
      //.then(() =>
      //User.find({ firstName: enteredName }))
      /* this only returns a single object that match the 'entered name'*/
      .then(() => User.findOne({ firstName: enteredName }))
      .then((foundUser) => console.log("foundUser", foundUser))
      .then(() => mongoose.connection.close())
      .catch((err) => console.error("Error connecting to mongo", err))
  );
}

/*the following function deletes a single user that matches the enteredName*/
function deleteSingleUser(enteredName) {
  return (
    mongoose
      .connect("mongodb://localhost/my_database")
      /* this deletes a single object that match the 'entered name'*/
      .then(() => User.deleteOne({ firstName: enteredName }))
      .then((deletedUser) => console.log("deletedUser", deletedUser))
      .then(() => mongoose.connection.close())
      .catch((err) => console.error("Error connecting to mongo", err))
  );
}
