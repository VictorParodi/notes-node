console.log('Starting notes.js');

let addNotes = (title, body) => {
    console.log(`Àdding note: ${title} => ${body}`);
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