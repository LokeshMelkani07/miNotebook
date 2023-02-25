import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  // we are using useLocation hook to get the location of active link so that we can change the active setting in the navbar
  // we will use location.pathname
  let location = useLocation();
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  // For dark mode of Navbar
  const [mode, setmode] = useState(false);
  const modeSet = () => {
    console.log("modeset button clicked");
    setmode(!mode);
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          background: mode ? "black" : "white",
          color: mode ? "white" : "black",
        }}
      >
        <Link className="navbar-brand" to="/">
          <span
            style={{
              fontWeight: "bold",
              color: "#FF800C",
              fontFamily: "cursive",
            }}
          >
            miNotebook
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link
                className="nav-link"
                to="/"
                style={{
                  textDecoration: "none",
                  color: location.pathname === "/" ? "#ff800c" : "gray",
                  fontWeight: location.pathname === "/" ? "bold" : "inherit",
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                style={{
                  textDecoration: "none",
                  color: location.pathname === "/about" ? "#ff800c" : "gray",
                  fontWeight:
                    location.pathname === "/about" ? "bold" : "inherit",
                }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <h6
                onClick={modeSet}
                style={{
                  margin: "10px",
                  cursor: "pointer",
                }}
              >
                {" "}
                {mode ? "Light Mode" : "Dark Mode"}
              </h6>
            </li>
          </ul>

          {!localStorage.getItem("token") ? (
            <form className="d-flex my-2">
              <Link
                to="/login"
                class="btn btn-primary"
                style={{
                  background: "#ff800c",
                  color: "black",
                  fontWeight: "bold",
                  border: "1px solid black",
                }}
                role="button"
              >
                <span style={{ marginRight: "12px" }}>Login</span>
                <i class="fa-solid fa-right-to-bracket"></i>
              </Link>
              <Link
                to="/signup"
                class="btn btn-primary mx-2"
                role="button"
                style={{
                  background: "#ff800c",
                  color: "black",
                  fontWeight: "bold",
                  border: "1px solid black",
                }}
              >
                <span style={{ marginRight: "12px" }}>Signup</span>
                <i class="fa-sharp fa-solid fa-user-plus"></i>
              </Link>
            </form>
          ) : (
            <button
              class="btn btn-primary"
              style={{
                background: "#f59b71",
                color: "black",
                fontWeight: "bold",
                border: "1px solid black",
              }}
              onClick={handleLogout}
            >
              <span style={{ marginRight: "12px" }}>Logout</span>
              <i class="fa-solid fa-right-from-bracket"></i>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
