console.log('Starting App');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');

let command = process.argv[2];
console.log('Command: ', command);

if (command === 'add') {
    console.log('Adding new note');
} else if (command === 'list') {
    console.log('List all notes');
} else if (command === 'read') {
    console.log('Reading all notes');
} else if (command === 'remove') {
    console.log('Removing notes');
} else {
    console.log('Command not recognized');
}