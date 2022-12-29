// 1 Require Express
const express = require("express");

// 2 Express server handling requests and responses
const app = express();

// 3 Our first Route:
app.get("/home", (request, response, next) =>
  response.send("<h1>Welcome Ironhacker. :)</h1>")
);

// 4 Server Started
app.listen(3000, () => console.log("My first app listening on port 3000! "));
