'use strict'

import {storageService} from './storage-service.js'
import {makeId} from './utils-service.js'

const NOTE_KEY = 'note'


export const KeepService = {
    getNoteById,
    getNotes,
    addNote,
    removeNote,
    updateNote,
    pinNote,
    unpinNote
}


function getNotes() {
    var notes = storageService.loadFromStorage(NOTE_KEY)
    if (!notes) {
        notes = gNotes;
        storageService.saveToStorage(NOTE_KEY, notes)    
    }
    gNotes = notes;    
    return notes;
}
 
function addNote(note){
    let newNote = createNote(note);
    gNotes.unshift(newNote);
    storageService.saveToStorage(NOTE_KEY,gNotes)
   
}


function removeNote(noteId){
    var idx = gNotes.findIndex(note => note.id === noteId);
    if (idx !== -1) gNotes.splice(idx,1);
    storageService.saveToStorage(NOTE_KEY,gNotes)
    return Promise.resolve();
}



function getNoteById(noteId) {
    gNotes = storageService.loadFromStorage(NOTE_KEY);
    var note = gNotes.find(note => note.id === noteId)
    return Promise.resolve(note);
}

function createNote(note){
    let defaultNote =  {
        id: makeId(7),
        isPinned: false,
        color: note.color || "#EBCFB2"
    }

    note = {...note, ...defaultNote}
    note.copydata = note.data
    if (note.type === 'todo-note') {
        if(typeof(note.data) === typeof("string")){
            let todos = note.data.split(', ');
            let fullTodos = todos.map(todo => ({txt: todo, isDone: false, id: makeId(7)}))
            note.data = fullTodos
        }
    }
    if(note.type === 'video-note'){
        let videoId =  note.data.split('=')[1];
        note.data = 'https://www.youtube.com/embed/' + videoId;
    }

    return note;
}

/*
function updateNote(note) {
    let notes = storageService.loadFromStorage(NOTE_KEY);
    var noteId = note.id
    var noteIdx = gNotes.findIndex(note => note.id === noteId)
    var newNote = createNote(note.data,note.type);
    notes.splice(noteIdx,1,newNote);
    storageService.saveToStorage(NOTE_KEY, notes);
}
*/

function updateNote(note) {
    let notes = storageService.loadFromStorage(NOTE_KEY);
    let noteId = note.id
    let noteIdx = gNotes.findIndex(note => note.id === noteId)
    let newNote = createNote(note);
    notes.splice(noteIdx,1,newNote);
    storageService.saveToStorage(NOTE_KEY, notes);
}

function pinNote(note){
    note.isPinned = true;
    storageService.saveToStorage(NOTE_KEY, gNotes);
    
}

function unpinNote(note){
    note.isPinned = false;
    storageService.saveToStorage(NOTE_KEY, gNotes);
    

}


let gNotes = [
    createNote({data: 'aaaaa',type: 'text-note'}),
    createNote({data: 'bbbbb',type: 'text-note'}),
    createNote({data: 'https://www.slashfilm.com/wp/wp-content/images/avatar-2-story.jpg',type: 'img-note'}),
    createNote({data: 'aaa, ssss',type: 'todo-note'})
];
// {data: 'aaaaa',type: 'text-note'}