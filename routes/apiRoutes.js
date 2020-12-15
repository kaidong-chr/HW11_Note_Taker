// 
const fs = require("fs");
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