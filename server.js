// Dependency required for our server to function
const express = require("express");

// Setting up the express server
const app = express();

// Port for our server
const PORT = process.env.PORT || 3001;

// Express app data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Express app file usage in public directory 
app.use(express.static("./public"));

// Route files that gives our server a map of how to respond when user visit or request data from various URL paths
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starts our server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});