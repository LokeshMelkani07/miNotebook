import React, { useContext, useState, useEffect, useRef } from "react";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import Notesitem from "./Notesitem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, addnote, getnote } = context;
  useEffect(() => {
    getnote();
  }, []);
  // We are making a modal
  // When we click in the edit button a modal should open where we have the details of the note already filled
  // We can update the note from there
  // We will bootstrap modal and we use useRef hook to click the launch button and hide it
  // We will use same form here as we did in Add a note
  // We will set the state
  // Now we make a edit note in our context where we can make the API call and edit the note
  const ref = useRef(null);
  const [note, setNote] = useState({ etitle: "", edescription: "", etag: "" });
  const updateNote = (currentNote) => {
    console.log("Button is clicked");
    ref.current.click();
    setNote({
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };
  // For input Fields
  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
    console.log(e.target.name, " ", e.target.value);
  };

  // For update Note Button
  const handleClick = (e) => {
    console.log("Updating the note ", note);
    e.preventDefault();
  };

  return (
    <>
      <AddNote />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="form-group">
                  <label HTMLfor="etitle" style={{ color: "#ff800c" }}>
                    Title<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    aria-describedby="emailHelp"
                    placeholder="Enter Title.."
                    onChange={onchange}
                  />
                </div>
                <div className="form-group">
                  <label HTMLfor="edescription" style={{ color: "#ff800c" }}>
                    Description<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    aria-describedby="emailHelp"
                    placeholder="Enter the Description..."
                    onChange={onchange}
                  />
                </div>
                <div className="form-group">
                  <label HTMLfor="etag" style={{ color: "#ff800c" }}>
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    aria-describedby="emailHelp"
                    placeholder="Enter the Tag..."
                    onChange={onchange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <h2 style={{ fontWeight: "bold", fontFamily: "fantasy" }}>Your Notes</h2>
      <div className="row my-3">
        {notes.map((note) => {
          return (
            <Notesitem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
