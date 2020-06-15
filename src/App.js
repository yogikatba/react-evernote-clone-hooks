import React,{useEffect, useState} from 'react';
import './App.css';
import Editor from './editor/editor';
import Sidebar from './sidebar/sidebar';
//import Sidebaritem from './sidebaritem/sidebaritem';
const firebase = require('firebase')

//1.25

function App() {
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null)
  const [selectedNote, setSelectedNote] = useState(null)
  const [notes, setNotes] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot(serverUpdate => {
        const note = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data['id'] = _doc.id;
          return data;
        });
        console.log(`note ${note}`);
        setNotes(note)
      });
  }, [])

  const selectNote = (note, index) => {
    setSelectedNoteIndex(index)
    setSelectedNote(note)
  }

  const deleteNote = (note) => {

  }

  const newNote = () => {
    
  }

  const noteUpdate = (id, noteObj) => {
      // console.log(`notes ${notes}`,id, noteObj)
      // firebase
      // .firestore()
      // .collection('notes')
      // .doc(id)
      // .update({
      //   title: noteObj.title,
      //   body: noteObj.body,
      //   timestamp: firebase.firestore.FieldValue.serverTimestamp()
      // });
  }

  return (
    <div className="app-container">
      <Sidebar 
        selectedNoteIndex={setSelectedNoteIndex} 
        notes={notes}
        deleteNote={deleteNote}
        selectNote={selectNote}
        newNote={newNote} />
      {selectedNote ? 
      <Editor 
        selectedNote={selectNote}
        selectedNoteIndex={setSelectedNoteIndex} 
        notes={notes}
        noteUpdate={noteUpdate}/> : null}
    </div>
  );
}

export default App;
