const mongoose = require("mongoose"); //1 loads mongoose

const dogSchema = new mongoose.Schema({ name: "string", breed: "string" }); // collection definition
const Dog = mongoose.model("dog", dogSchema); // Dog model definition

const catSchema = new mongoose.Schema({ name: "string", breed: "string" }); // collection definition
const Cat = mongoose.model("cat", catSchema); // Cat model definition

mongoose
  .connect("mongodb://localhost/exampleApp")
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )

  .then(() => Dog.create({ name: "Truco", breed: "Jack Russel Terrier" })) // this create our dog
  .then((dog) =>
    console.log("Dog was successfully created", dog)
  ) /*this takes the information .create and passes it t to (user).*/

  .then(() => Cat.create({ name: "Garras", breed: "Siamese" })) // this create our cat
  .then((cat) =>
    console.log("Cat was successfully created", cat)
  ) /*this takes the information .create and passes it t to (user).*/
  .catch((err) => console.error("Error connecting to mongo", err));
