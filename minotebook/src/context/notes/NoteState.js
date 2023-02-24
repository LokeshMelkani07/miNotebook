import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

// This context is created to stop prop drilling

const NoteState = (props) => {
  const state = {};
  return (
    <NoteContext.Provider value={state}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
