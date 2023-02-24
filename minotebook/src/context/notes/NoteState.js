import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

// This context is created to stop prop drilling

const NoteState = (props) => {
  const noteInitial = [
    {
      _id: "63f71cb0cb2fbd1ad7a59183",
      user: "63f709a27b8d3e607eb21272",
      title: "Holiday",
      description: "This is a holiday note",
      tag: "school",
      date: "2023-02-23T07:58:41.000Z",
      __v: 0,
    },
    {
      _id: "63f71cb0cb2fbd1ad7a59183",
      user: "63f709a27b8d3e607eb21272",
      title: "Holiday",
      description: "This is a holiday note",
      tag: "school",
      date: "2023-02-23T07:58:41.000Z",
      __v: 0,
    },
    {
      _id: "63f71cb0cb2fbd1ad7a59183",
      user: "63f709a27b8d3e607eb21272",
      title: "Holiday",
      description: "This is a holiday note",
      tag: "school",
      date: "2023-02-23T07:58:41.000Z",
      __v: 0,
    },
    {
      _id: "63f71cb0cb2fbd1ad7a59183",
      user: "63f709a27b8d3e607eb21272",
      title: "Holiday",
      description: "This is a holiday note",
      tag: "school",
      date: "2023-02-23T07:58:41.000Z",
      __v: 0,
    },
    {
      _id: "63f71cb0cb2fbd1ad7a59183",
      user: "63f709a27b8d3e607eb21272",
      title: "Holiday",
      description: "This is a holiday note",
      tag: "school",
      date: "2023-02-23T07:58:41.000Z",
      __v: 0,
    },
    {
      _id: "63f71cb0cb2fbd1ad7a59183",
      user: "63f709a27b8d3e607eb21272",
      title: "Holiday",
      description: "This is a holiday note",
      tag: "school",
      date: "2023-02-23T07:58:41.000Z",
      __v: 0,
    },
    {
      _id: "63f71cb0cb2fbd1ad7a59183",
      user: "63f709a27b8d3e607eb21272",
      title: "Holiday",
      description: "This is a holiday note",
      tag: "school",
      date: "2023-02-23T07:58:41.000Z",
      __v: 0,
    },
    {
      _id: "63f71cb0cb2fbd1ad7a59183",
      user: "63f709a27b8d3e607eb21272",
      title: "Holiday",
      description: "This is a holiday note",
      tag: "school",
      date: "2023-02-23T07:58:41.000Z",
      __v: 0,
    },
    {
      _id: "63f71cb1cb2fbd1ad7a59185",
      user: "63f709a27b8d3e607eb21272",
      title: "Holiday",
      description: "This is a holiday note",
      tag: "school",
      date: "2023-02-23T07:58:41.818Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(noteInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
