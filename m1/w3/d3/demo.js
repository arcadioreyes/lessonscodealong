/*The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.*/

/*Exemple 1*/
const array1 = [1, 4, 9, 16];
const array2 = ["Alfie", "Arcadio", "Axel", "Humberto"];

const newArray = array1.map(function (x) {
  return x * 2;
});

console.log(newArray);

/*Exemple 2: adding "Mr in front of the names using .map*/

// const secondNewArray = array2.map(function (name) {
//   return "Mr. " + name;
// });

// console.log(secondNewArray);

/*Exemple 3: adding "Mr in front of the names starting by "A" using .map*/

// const secondNewArray = newArray2.map(function (name) {
//   if (name.includes("A")) {
//     return "Mr. " + name;
//   }
//   return "";
// });

// console.log(secondNewArray);

// /*Exemple 4: using  .map to add "Mr" in front of the names starting by "A" and using .filter to remove the names that does not start with "" */

const secondNewArray = array2.map(function (name) {
  if (name.includes("A")) {
    return "Mr. " + name;
  }
  return "";
});

const thirdNewArray = secondNewArray.filter(function (name) {
  return name !== "";
});

// /*Exemple 5: the sme as ex 4 but using a for loop */
const fourthArray = [];
for (let i = 0; i < secondNewArray.length; i++) {
  if (secondNewArray[i] !== "") {
    fourthArray.push(secondNewArray[i]);
  }
}

console.log(thirdNewArray);
console.log(fourthArray);
