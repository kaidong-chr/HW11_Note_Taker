let express = require("express");
var path = require("path");

let app = express();

let PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
});


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
