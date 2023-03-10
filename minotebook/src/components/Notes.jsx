import React, { useContext, useState, useEffect, useRef } from "react";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import Notesitem from "./Notesitem";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const context = useContext(noteContext);
  const navigate = useNavigate();
  // let filteredData = [];
  const { notes, addnote, getnote, editnote, getNoteResult } = context;
  // For search bar input
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    // If user is logged in, we store the auth token in the local storage and if local storage does not have auth-token means the user is not logged in
    // To see the notes, the user need to have a logged in account so we redirect user to login page
    if (localStorage.getItem("token")) {
      getnote();
      console.log("notes are ", notes);
    } else {
      navigate("/login");
    }
  }, []);
  // We are making a modal
  // When we click in the edit button a modal should open where we have the details of the note already filled
  // We can update the note from there
  // We will bootstrap modal and we use useRef hook to click the launch button and hide it
  // We will use same form here as we did in Add a note
  // We will set the state
  // Now we make a edit note in our context where we can make the API call and edit the note
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({
    id: " ",
    etitle: "",
    edescription: "",
    etag: "",
  });
  const updateNote = (currentNote) => {
    console.log("Button is clicked");
    ref.current.click();
    setNote({
      id: currentNote._id,
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
    editnote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    props.showAlert("Note Updated Successfully!", "success");
  };

  // Search Bar Functionality
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  {
    /*
     const filteredData =
    getNoteResult.length > 0
      ? getNoteResult.filter((el) => {
          //if no input the return the original
          if (searchInput === "") {
            return el;
          }
          //return the item which contains the user input
          else {
            return el.title.toLowerCase().includes(searchInput.toLowerCase());
          }
        })
      : " ";
  console.log("filtered data is ", filteredData);
    */
  }
  let filteredNotes = [];
  if (searchInput.length > 0) {
    filteredNotes = notes.filter((e) => {
      return e.title.toLowerCase().includes(searchInput.toLowerCase());
    });
    console.log("notes value is ", notes);
    console.log("filtered notes value is ", filteredNotes);
  }

  return (
    <>
      <AddNote showAlert={props.showAlert} />
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
                    minLength={5}
                    required
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
                    minLength={5}
                    required
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
                ref={refClose}
              >
                Close
              </button>
              <button
                disabled={
                  note.etitle.length < 5 || note.edescription.length < 5
                }
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
      <div className="d-flex flex-row justify-content-between my-5 flex-wrap">
        <h2 style={{ fontWeight: "bold", fontFamily: "fantasy" }}>
          Your Notes
        </h2>
        <input
          type="text"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput}
          style={{
            borderRadius: "5px",
            padding: "5px",
            marginTop: "3px",
          }}
        />
      </div>
      <div className="row my-3">
        <div
          className="container mx-2"
          style={{ color: "red", fontFamily: "cursive" }}
        >
          {notes.length === 0 && "No Notes to Display"}
        </div>
        {/*
         {getNoteResult.length > 0
          ? filteredData.map((note) => {
              return (
                <Notesitem
                  key={note._id}
                  updateNote={updateNote}
                  note={note}
                  showAlert={props.showAlert}
                />
              );
            })
          : notes.map((note) => {
              return (
                <Notesitem
                  key={note._id}
                  updateNote={updateNote}
                  note={note}
                  showAlert={props.showAlert}
                />
              );
            })}
      */}
        {searchInput.length > 0
          ? filteredNotes.map((note) => {
              return (
                <Notesitem
                  key={note._id}
                  updateNote={updateNote}
                  note={note}
                  showAlert={props.showAlert}
                />
              );
            })
          : notes.map((note) => {
              return (
                <Notesitem
                  key={note._id}
                  updateNote={updateNote}
                  note={note}
                  showAlert={props.showAlert}
                />
              );
            })}
      </div>
    </>
  );
};

export default Notes;
