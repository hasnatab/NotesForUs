import React, { useState } from "react";

function CreateArea(props) {
  const [noteItem, setNote] = useState({
    noteTitle: "",
    noteContent: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleSubmit(event) {
    props.addNotes(noteItem);
    setNote({
      noteTitle: "",
      noteContent: ""
    });

    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="noteTitle"
          value={noteItem.noteTitle}
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          name="noteContent"
          value={noteItem.noteContent}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
