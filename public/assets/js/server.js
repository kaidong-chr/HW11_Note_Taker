let express = require("express");
let path = require("path");
let fs = require("fs");

let app = express();

let PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("/api/notes"), function(req, res) {
    let notes = req.body;

}

app.post("/api/notes"), function(req, res) {
    let newNotes = req.body;

    
}

app.delete("/api/notes:id"), function (req, res) {
    
}

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
