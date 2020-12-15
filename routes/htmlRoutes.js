// Need the path package to get the correct file path for our html
const path = require("path");

// Routing
module.exports = function(app) {
    
    // Matching route for notes
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
      });
    
    // If no matching route is found default to home
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });
    
}