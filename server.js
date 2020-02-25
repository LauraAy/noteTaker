const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/api/notes', (req, res) => {
  fs.readFile('./db.json', 'utf8', (err, fridge) => {
    if (err) { console.log(err) }
    res.json(JSON.parse(fridge))
  })
})

// app.post('/api/notes', (req, res) => {
//   fs.readFile('./fridge.json', 'utf8', (err, data) => {
//     if (err) {console.log(err)}
//     const notes = JSON.parse(data)
//     notes.push(req.body)
//     fs.writeFile('./db/db.json', JSON.stringify(notes), err => {if (err) {console.log(err)}
//     res.sendStatus(200)
//     })
//   })

// app.delete('/api/notes', (req, res) => {

// })



app.listen(process.env.PORT || 3000)