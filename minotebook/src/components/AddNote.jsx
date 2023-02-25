import React, { useState } from "react";
import noteContext from "../context/notes/noteContext";
import { useContext } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addnote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  // For Submit button
  const handleClick = (e) => {
    e.preventDefault();
    addnote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };
  // For input Fields
  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
    console.log(e.target.name, " ", e.target.value);
  };
  return (
    <div
      style={{
        padding: "15px",
        marginBottom: "20px",
        boxShadow:
          "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
      }}
    >
      <h2 style={{ fontWeight: "bold", fontFamily: "fantasy" }}>Add a Note</h2>
      <form className="my-3">
        <div className="form-group">
          <label HTMLfor="title" style={{ color: "#ff800c" }}>
            Title<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            value={note.title}
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            placeholder="Enter Title.."
            onChange={onchange}
            minLength={5}
            required
          />
        </div>
        <div className="form-group">
          <label HTMLfor="description" style={{ color: "#ff800c" }}>
            Description<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            className="form-control"
            value={note.description}
            id="description"
            name="description"
            aria-describedby="emailHelp"
            placeholder="Enter the Description..."
            onChange={onchange}
            minLength={5}
            required
          />
        </div>
        <div className="form-group">
          <label HTMLfor="tag" style={{ color: "#ff800c" }}>
            Tag
          </label>
          <input
            type="text"
            value={note.tag}
            className="form-control"
            id="tag"
            name="tag"
            aria-describedby="emailHelp"
            placeholder="Enter the Tag..."
            onChange={onchange}
          />
        </div>
        <button
          disabled={note.title.length < 5 || note.description.length < 5}
          type="submit"
          className="btn"
          onClick={handleClick}
          style={{
            fontWeight: "bold",
            background: "#ff800c",
            outline: "none",
            boxShadow:
              "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
          }}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Add Note"
        >
          Add Note
        </button>
        <Tooltip id="my-tooltip" />
      </form>
    </div>
  );
};

export default AddNote;
