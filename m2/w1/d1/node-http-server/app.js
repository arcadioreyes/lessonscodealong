/* the http package is built in within nod itself, so I do not need to enter npm install. in order to use it, we can only require it directly in our app.js file*/
const http = require("http"); // loads in-built http package

/* here is aexample on how to use the package we just created 'example.js'*/
const example = require("./example");
console.log(example.sayHello());
console.log(example.sayGoodbye());

/*here, we aaree creating a server and adding every section of our site*/
const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.write("Welcome to the Homepage");
    response.end();
  } else if (request.url === "/about") {
    response.write("Welcome to the About page");
    response.end();
  } else if (request.url === "/contact") {
    response.write("Welcome to the Contact page");
    response.end();
  } else {
    response.statusCode = 404;
    response.write("404 Page");
    response.end();
  }
});

/*setting a port. A port is a gateway that we need to specicy*/
server.listen(3000, () => console.log("server is running on port 3000"));
