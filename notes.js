console.log('Starting notes.js');

const fs = require('fs');

let addNotes = (title, body) => {
    let notes = [];
    let note = { title, body}

    try {
        let notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {
        // some code
    }

    let duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
}

let getAll = () => {
    console.log('Getting all notes');
}

let readNote = (title) => {
    console.log(`Read note: ${title}`);
}

let removeNote = (title) => {
    console.log(`Remove note: ${title}`);
}

module.exports = {
    addNotes,
    getAll,
    readNote,
    removeNote
}