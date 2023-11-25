const express = require('express');
const app = express();

app.use(express.json());


// const Notes = [{
//     id: 1,
//     content: "this is a story book"
// },
// {
//     id: 2,
//     content: "this is movie"
// }
// ];
// const noteSchema = new mongoose.Schema({
//     id: Number,
//     Name: String
// });
// const Note = mongoose.model('Note',noteSchema,'notes');

const HOSTNAME = '127.0.0.1';
// app.get('/api/notes', (req, res) => {
//     Note.find({}, {})
//         .then(notes => {
//             res.status(200).json(notes);
//     })
// });
// app.post('/api/notes/:id', (req, res) => {
//     const id = req.params.id;
//     const note = Note.findOne(Note.id==id);

//     if (note)
//     {
//         res.status(200).json(note);
//         console.log(note);
//         }
// })

module.exports = app;