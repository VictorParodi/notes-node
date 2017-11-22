const fs = require('fs');

let originalNote = {
    title: 'Some title',
    body: 'Some body'
}

let originalNoteStr = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteStr);

let noteStr = fs.readFileSync('notes.json');
let noteObj = JSON.parse(noteStr);

console.log(typeof noteObj);
console.log(noteObj);

