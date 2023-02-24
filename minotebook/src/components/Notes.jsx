import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Notesitem from "./Notesitem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <>
      <h2>Your notes</h2>
      <div className="row my-3">
        {notes.map((note) => {
          return <Notesitem key={note._id} note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;
