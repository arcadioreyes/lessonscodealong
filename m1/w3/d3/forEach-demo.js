const animalArray = ["dog", "cat", "fish"];

// .forEach a way to loop over an array
animalArray.forEach(function (animal) {
  //   console.log(animal);
});

/* this is the same as above but using an arrow function*/
// animalArray.forEach((animal, i) => console.log(animal, i));

/*this is the same as above but using an arrow function and more than 1 line of code. {} are needed when more than 1 line of code*/
animalArray.forEach((animal, i) => {
  console.log(animal);
  console.log(i);
});
