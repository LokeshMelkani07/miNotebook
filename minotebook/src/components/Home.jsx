import React from "react";
import AddNote from "./AddNote";
import Notes from "./Notes";

const Home = ({ showAlert }) => {
  return (
    <>
      <div className="container my-3">
        <Notes showAlert={showAlert} />
      </div>
    </>
  );
};

export default Home;
