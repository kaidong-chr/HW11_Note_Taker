// Need node.js fs module to access and interact with the file system
const fs = require("fs");

// Variable for the inputs from db.json
let data = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));

// Routing
module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(data);
    });

    app.post("/api/notes", function(req, res) {
        let notes = req.body;
        notes.id = (data.length).toString();
        data.push(notes);
        fs.writeFileSync("./db/db.json", JSON.stringify(data), function (err) {
            if (err) throw err;
        });
        res.json(data);
    });
    
    app.delete("/api/notes/:id", function (req, res) {
        let uniqueID = req.params.id;
        let newID = 0;
        data = data.filter(usedNotes => {
            return usedNotes.id != uniqueID;
        });
        for (usedNotes of data){
            usedNotes.id = newID.toString();
            uniqueID++;
        }
        fs.writeFileSync("./db/db.json", JSON.stringify(data));
        res.json(data);
    });
};