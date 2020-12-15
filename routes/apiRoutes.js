// Need node.js fs module to access and interact with the file system
const fs = require("fs");

// Variable for the inputs from db.json
let data = JSON.parse(fs.readFileSync("../db/db.json", "utf-8"));

// Routing
module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(data);
    });

    // app.get("/api/notes:id", function (req, res) {
    //     res.json(data);
    // });

    app.post("/api/notes", function(req, res) {
        let notes = req.body;

        
    });

    // app.delete("/api/notes:id", function (req, res) {

    // });
};