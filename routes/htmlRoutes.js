var path = require("path");
var router = require("express").Router()


router.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});
// All other routes respond with the index.html file

router.get('/api/notes', (req, res) => {
  fs.readFile('./db.json', 'utf8', (err, notes) => {
    if (err) { console.log(err) }
    res.json(JSON.parse(notes))
  })
})

module.exports = router