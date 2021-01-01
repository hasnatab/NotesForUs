import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesList, setNotesList] = useState([]);

  function addNotes(newNoteItem) {
    setNotesList((prevNoteItems) => {
      return [...prevNoteItems, newNoteItem];
    });
  }

  function deleteNote(id) {
    setNotesList((prevNote) => {
      return notesList.filter((note, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNotes={addNotes} />
      {notesList.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.noteTitle}
            content={note.noteContent}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
