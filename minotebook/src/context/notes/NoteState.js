import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

// This context is created to stop prop drilling

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const noteInitial = [];
  const [notes, setNotes] = useState(noteInitial);

  // Get All Notes
  const getnote = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmNzA5YTI3YjhkM2U2MDdlYjIxMjcyIn0sImlhdCI6MTY3NzEzNTU0OH0.Bu5OFBtqIZ4j2EmULG_z9K8SPVcVt8iBdsaTKHitaF0",
      },
    });
    const json = await response.json();
    console.log("Got a note ", json);
    setNotes(json);
  };

  // Add a note
  const addnote = async (title, description, tag) => {
    // API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      body: JSON.stringify({ title, description, tag }),
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };

  // Delete a note
  const deletenote = async (id) => {
    console.log(`Deleting the note with ${id}`);
    // API CALL
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    // const json = await response.json();
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    console.log("Newnotes after delete are ", newNotes);
    setNotes(newNotes);
  };

  // Edit a note
  const editnote = async (id, title, description, tag) => {
    // API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, description, tag }),
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    // We observe that our note is updating in the frontend but its not updating in the frontend
    // This is because in React we cannot change the state like this
    // We make a Deep Copy of notes using JSON.parse and JSON.stringify
    // We replace notes with that copy
    let newNotes = JSON.parse(JSON.stringify(notes));
    // console.log("newNOtes is ", newNotes);
    // Logic to edit the note
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addnote, editnote, deletenote, getnote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
