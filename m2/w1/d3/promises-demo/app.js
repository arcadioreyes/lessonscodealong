const fs = require("fs-extra");

/*when node.js was created it was imagined to work with nested callback functions inside callback functions. this way of working is called "callback hell", when jhandling a lot of data, this can be quickly complicatedas the nested functions are in every nest more difficult to read and to access.  Fortunately we have "promises", which is an alternatif to this.  */

/*call back form:*/
// c (err, data) => {
//   console.log(data);
//   fs.readFile("./test2.txt", "utf8", (err, secondData) => {
//     console.log(secondData);
//     fs.readFile("./test3.txt", "utf8", (err, thirdData) => {
//       console.log(thirdData);
//     });
//   });
// });

/* writing code with promises will have the same result but cleaner and more readable*/
/*promises form:*/
// const firstFile = fs
//   .readFile("./test.txt", "utf-8")
//   .then((data) => console.log("firstFile", data));
// const secondFile = fs
//   .readFile("./test2.txt", "utf-8")
//   .then((data) => console.log("secondFile", data));
// const thirddFile = fs
//   .readFile("./test3.txt", "utf-8")
//   .then((data) => console.log("thirdFile", data));

/*when using promises, we can chain asa many .then as we want*/
fs.readFile("./test.txt", "utf-8") // 1 pending ->fullfilled/ rejected
  .then((data) => console.log(data)) // 2 if fullfilled -> console.log
  .then(() => console.log("test"))
  .catch((err) => console.log(err));
/* all the promise have to have a .catch in order to spoil the errors in the code*/

/*another example of a promisee*/
const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Ironhack");
  }, 4000);
});

pr1.then((val) => console.log("Resolved with: ", val));
