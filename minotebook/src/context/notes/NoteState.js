import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

// This context is created to stop prop drilling
// This has update function which changes the state after 1 sec
// This has a object through which we take the value
// We use this value in About.js
// It is like <NoteContext.Provider value={{ state:state, update:update }}> but Es6 syntax simplifies it to {state,update}

const NoteState = (props) => {
  const s1 = {
    name: "lokesh",
    class: "5b",
  };
  const [state, setState] = useState(s1);
  const update = () => {
    setTimeout(() => {
      setState({
        name: "Rohan",
        class: "10A",
      });
    }, 1000);
  };

  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
