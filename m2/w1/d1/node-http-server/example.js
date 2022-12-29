/* a package is a JS file where you have some functionalities this is the example of a package creation*/
function sayHello() {
  return "Hello World!";
}

function sayGoodbye() {
  return "Goodbye World!";
}

/*this is communicating that I am willing to export some functionalities from my 'example.js' file to another file. Note: every functionality has to be mentionned when exporting*/
module.exports = { sayHello: sayHello, sayGoodbye: sayGoodbye };
