const express = require('express');
const app = express();
const mongoose = require('mongoose');

const url = `mongodb+srv://billanivash52:Nivashdb32@nivashclust.83ce4ig.mongodb.net/B51DB`;

mongoose.connect(url)
    .then(() => {
        console.log('Connected sucessfull...');
    })
    .catch((e) => {
        console.error(e);
    })
// const Notes = [{
//     id: 1,
//     content: "this is a story book"
// },
// {
//     id: 2,
//     content: "this is movie"
// }
// ];
const noteSchema = new mongoose.Schema({
    id: Number,
    Name: String
});
const Note = mongoose.model('Note',noteSchema,'notes');

const PORT = 3001;
const HOSTNAME = '127.0.0.1';
app.get('/api/notes', (req, res) => {
    Note.find({}, {})
        .then(notes => {
            res.status(200).json(notes);
    })
});
app.listen(PORT, () => {
    console.log(`Server Running at http://${HOSTNAME}:${PORT}`);
})
