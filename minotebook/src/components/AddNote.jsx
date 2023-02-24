import React, { useState } from "react";
import noteContext from "../context/notes/noteContext";
import { useContext } from "react";

const AddNote = () => {
  const context = useContext(noteContext);
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const { addnote } = context;
  // For Submit button
  const handleClick = (e) => {
    e.preventDefault();
    addnote(note.title, note.description, note.tag);
  };
  // For input Fields
  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h2>Add a note</h2>
      <form className="my-3">
        <div className="form-group">
          <label HTMLfor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            placeholder="Enter Title.."
            onChange={onchange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Add Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            placeholder="Enter the Description..."
            onchange={onchange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNote;
