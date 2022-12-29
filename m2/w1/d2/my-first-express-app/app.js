const express = require("express"); // loads express package
const app = express(); // this executes an express server
const port = 3000; // defining our server port

/*Make everything inside of public/ available.
the use method help us to configure express.
configure step whiwh tells where my static files
are located
*/
app.use(express.static("public"));

/* Routing the navigational system. This is how we handle the requests from clients.
This is defining my homepage route. This is a SERVER ROUTE with 2 arguments. 
The first is the end point "/", the second is a callback functions with req and res.*/
app.get("/", (req, res) => {
  /* this is the response we are sendding from the server to the client when looking for our site*/
  // res.send("<h1>Home page</h1>");
  res.sendFile(__dirname + "/views/home-page.html");
});

/* This is defining my about page route.*/
app.get("/about", (req, res) => {
  res.send("About Page");
});

/* This is defining my contact page route.*/
app.get("/contact", (req, res) => {
  res.send("Contact");
});

/* This is defining my contact portfolio route.
andd we are testing nodemon*/
app.get("/testNodemon", (req, res) => {
  res.send("testNodemon");
});

/* creating a coolCat route and including our style.css*/
app.get("/cat", (req, res, next) => {
  res.sendFile(__dirname + "/views/cat-page.html");
});

// this allows incoming requests from clients
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
