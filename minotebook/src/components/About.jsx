import React, { useEffect } from "react";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const About = () => {
  return (
    <div className="container">
      <h1>
        {" "}
        <span
          style={{
            color: "#FF800C",
            fontWeight: "bold",
            fontFamily: "cursive",
          }}
        >
          miNotebook
        </span>{" "}
        :{" "}
        <span
          style={{
            fontFamily: "fantasy",
          }}
        >
          Your Notebook on the go
        </span>
      </h1>
      <p
        style={{
          marginTop: "20px",
          fontSize: "1.5rem",
          fontWeight: "bold",
          background: "FF800C",
        }}
      >
        This App is a note taking app which is made so that you never forget
        your important stuff. miNotebook comes with some amazing features like
        <ul>
          <li>User Signup and User Login</li>
          <li>Personalised Notes for a specific user</li>
          <li>Search Functionality to search your notes in just one click</li>
          <li>Add Unlimited Notes</li>
          <li>Update Your Notes in just one click</li>
          <li>Delete Your Notes in just one click</li>
          <li>
            Dark Mode for your clear visiblity and less battery consumption
          </li>
        </ul>
      </p>
    </div>
  );
};

export default About;
