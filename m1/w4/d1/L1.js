/////* .map()*/////

/////* 1 Given an array of foods, return an array with the letters of each fods’s name capitalized. */////

// const foods = ["pizza", "sandwiches", "ice cream"];

// ES5:

// const capsFoods = foods.map(function (food) {
//   return food.toUpperCase();
// });

// console.log(capsFoods);

// [ 'PIZZA', 'SANDWICHES', 'ICE CREAM' ]

// ES6:

// const capsFoods = foods.map((food) => food.toUpperCase());

// console.log(capsFoods);

// [ 'PIZZA', 'SANDWICHES', 'ICE CREAM' ]

/////* 2 Given an array of cities, return an array with the first letter of each city’s name capitalized. You can use ES5 or ES6 syntax, whichever you feel more comfortable with at this point.*/////

// const cities = [
//   "miami",
//   "barcelona",
//   "madrid",
//   "amsterdam",
//   "berlin",
//   "sao paulo",
//   "lisbon",
//   "mexico city",
//   "paris",
// ];

// function capitalizeCities(element) {
//   return cities.map((element) => {
//     return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
//   });
// }

// console.log(capitalizeCities(cities));

///// 3 Use of /charAt()

// const anyString = "Brave new world";
// console.log(`The character at index 0   is '${anyString.charAt()}'`);
// console.log(`The character at index 0   is '${anyString.charAt(1)}'`);

/////* .reduce()*/////
const numbers = [2, 4, 6, 8];

const total = numbers.reduce(function (accumulator, currentValue) {
  console.log(
    "accumulator is: ",
    accumulator,
    "and current value is: ",
    currentValue
  );
  return accumulator + currentValue;
});

console.log("total is: ", total);

// accumulator is:  2 and current value is:  4
// accumulator is:  6 and current value is:  6
// accumulator is:  12 and current value is:  8
// total is:  20
