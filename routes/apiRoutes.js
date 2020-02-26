var path = require("path");
var router = require("express").Router()
var fs = require("fs")


router.post('/api/notes', (req, res) => {
  fs.readFile('./db.json', 'utf8', (err, data) => {
    if (err) { console.log(err) }
    const notes = JSON.parse(data)
    notes.push(req.body)
    fs.writeFile('./db.json', JSON.stringify(notes), err => {
      if (err) { console.log(err) }
      res.sendStatus(200)
    })
  })
})


router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// app.delete('/api/notes', (req, res) => {

// })
module.exports = router