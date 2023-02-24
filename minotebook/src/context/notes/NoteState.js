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
    // API call will be done
    // API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      body: JSON.stringify({ title, description, tag }),
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmNzA5YTI3YjhkM2U2MDdlYjIxMjcyIn0sImlhdCI6MTY3NzEzNTU0OH0.Bu5OFBtqIZ4j2EmULG_z9K8SPVcVt8iBdsaTKHitaF0",
      },
    });
    const json = await response.json();
    console.log("Adding a note");
    const note = {
      _id: "63f71cb1cb2fbd1ad7a59185",
      user: "63f709a27b8d3e607eb21272",
      title: title,
      description: description,
      tag: tag,
      date: "2023-02-23T07:58:41.818Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a note
  const deletenote = async (id) => {
    console.log(`Deleting the note with ${id}`);
    // API CALL
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      //   body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmNzA5YTI3YjhkM2U2MDdlYjIxMjcyIn0sImlhdCI6MTY3NzEzNTU0OH0.Bu5OFBtqIZ4j2EmULG_z9K8SPVcVt8iBdsaTKHitaF0",
      },
    });
    const json = await response.json();
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
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
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmNzA5YTI3YjhkM2U2MDdlYjIxMjcyIn0sImlhdCI6MTY3NzEzNTU0OH0.Bu5OFBtqIZ4j2EmULG_z9K8SPVcVt8iBdsaTKHitaF0",
      },
    });
    const json = await response.json();
    // Logic to edit the note
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
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
