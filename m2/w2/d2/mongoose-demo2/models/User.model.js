/*here we are declaring and loading mongoose */
// const mongoose = require("mongoose");

// const schema = new mongoose.Schema({ name: "string", size: "string" }); //schema definition
// const Tank = mongoose.model("Tank", schema); // model definition

/*Destructuring: with the following syntax we are communicating
that we want to extract the Schema and at the same time
 we want to assign it to a variable call Schema. The same with the model.
 so with this line we are extracting something anf creating a variable*/
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: "string",
  email: "string",
  password: "string",
}); //schema definition
const User = model("User", userSchema); // model definition

/*this helps us to export our model to other files
whenever I want to import something from this file is going to be
pointing at our User model */
module.exports = User;
