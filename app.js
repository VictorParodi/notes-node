const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

let argv = yargs.argv;
let command = argv._[0];

let logNotes = (note) => {
    console.log('----------');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

if (command === 'add') {
    let note = notes.addNotes(argv.title, argv.body);
    note? logNotes(note) : console.log('This title is in already used');
} else if (command === 'list') {
    let allNotes = notes.getAll();
    allNotes.forEach((note) => logNotes(note));
} else if (command === 'read') {
    let note = notes.readNote(argv.title);
    note? logNotes(note) : console.log('Note not found');
} else if (command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}