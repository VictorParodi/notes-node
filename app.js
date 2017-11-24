console.log('Starting App');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

let argv = yargs.argv;
let command = argv._[0];
console.log('Command: ', command);
console.log(argv);


if (command === 'add') {
    let note = notes.addNotes(argv.title, argv.body);
    note? console.log(`Note created => ${note.title}: ${note.body}`) : console.log('This title is in already used');
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    let note = notes.readNote(argv.title);
    let message = note? `${note.title}: ${note.body}` : 'Note not found';
    console.log(message);
} else if (command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}