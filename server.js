const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');

//handling the process
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


//server setup
const app = express();
const PORT = process.env.PORT || 3001;

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());


//middleware
app.use(express.static(path.join(__dirname, 'public')));

//api get route
app.get("/api/notes", (req, res) => {
    readFileAsync("./db/db.json", "utf8").then(function(data) {
        res.json(data); //might need to change notes into data
    })
});


//api post route
app.post("/api/notes", (req, res) => {
    const note = req.body;
    console.log(note);
    readFileAsync('./db/db.json', 'utf8').then(function(data) {
        const notes = JSON.parse(data);
        note.id = notes.length.toString();
        notes.push(note);
        return notes;
    }).then (function(data) {//might need to change notes into data
        writeFileAsync('./db/db.json', JSON.stringify(data));
        res.json(data);
    });
});


//api delete route
app.delete('/api/notes/:id', (req, res) => {
    const idToDelete = req.params.id;
    readFileAsync('./db/db.json', 'utf8').then(function(data) {
        const notes = JSON.parse(data);
        const newNotes = notes.filter(note => note.id!== idToDelete);
        for (let i = 0; i < newNotes.length; i++) {
            if (newNotes[i].id === idToDelete) {
                newValue = newNotes.splice(i, 1);
            }
        }
        return newNotes;
    }).then(function(newNotes) {
        writeFileAsync('./db/db.json', JSON.stringify(newNotes));
        res.send('You have successfully saved the note!');
    });
});


//html get route
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/api/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

//listen for requests
app.listen(PORT,function(){
    console.log('listening on port' + PORT);
});