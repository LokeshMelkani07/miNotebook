import React, { useEffect } from "react";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";

// Whatever written inside the context we use it by useContext API
// a.update is a function
// We do a.state.name because we have 2 values and inside object, name and class are two key-value pairs

const About = () => {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
  }, []);
  return (
    <div>
      This is ABout {a.state.name} and he is in {a.state.class}
    </div>
  );
};

export default About;
