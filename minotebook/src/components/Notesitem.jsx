import React from "react";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Notesitem = (props) => {
  const context = useContext(noteContext);
  const { deletenote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div
        className="card my-3"
        style={{
          boxShadow:
            "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
        }}
      >
        <div className="card-body">
          <h5
            className="card-title"
            style={{ fontWeight: "bolder", textOverflow: "ellipsis" }}
          >
            {note.title}
          </h5>
          <p
            className="card-text"
            style={{
              fontWeight: "bold",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {note.description}
          </p>
          <p
            className="card-text"
            style={{
              background: "#edeae5",
              fontSize: "1rem",
              width: "fit-content",
              padding: "4px",
              borderRadius: "5px",
            }}
          >
            {note.tag}
          </p>
          <i
            class="fa-solid fa-trash mx-2"
            onClick={() => {
              deletenote(note._id);
              props.showAlert("Note Deleted Successfully!", "success");
            }}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Delete Note"
          ></i>
          <Tooltip id="my-tooltip" />
          <i
            class="fa-solid fa-pen-to-square mx-2"
            onClick={() => {
              updateNote(note);
            }}
            data-tooltip-id="my-tooltipp"
            data-tooltip-content="Edit Note"
          ></i>
          <Tooltip id="my-tooltipp" />
        </div>
      </div>
    </div>
  );
};

export default Notesitem;
