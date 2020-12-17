// Need node.js fs module to access and interact with the file system
const fs = require("fs");

// Variable for the inputs from db.json
let data = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));

// API Routing
module.exports = function(app) {
    // Retrieving the data from db.json
    app.get("/api/notes", function(req, res) {
        res.json(data);
    });
    
    // Sending the data the user submits to the server
    app.post("/api/notes", function(req, res) {
        let notes = req.body;
        notes.id = (data.length).toString();
        data.push(notes);
        fs.writeFileSync("./db/db.json", JSON.stringify(data), function (err) {
            if (err) throw err;
        });
        res.json(data);
    });
    
    // Deleting the current data we have
    app.delete("/api/notes/:id", function (req, res) {
        let uniqueId = req.params.id;
        let newId = 0;
        data = data.filter((current) => {
            return current.id != uniqueId;
        });
        for (current of data) {
            current.id = newId.toString();
            newId++;
        }
        fs.writeFileSync("./db/db.json", JSON.stringify(data));
        res.json(data);
    });
};