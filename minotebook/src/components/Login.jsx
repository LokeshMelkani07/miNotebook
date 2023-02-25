import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// POST: http://localhost:5000/api/auth/login

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    // console.log("Valid json ", note);
    if (json.success) {
      // Save the auth-token
      localStorage.setItem("token", json.authToken);
      // Alert
      props.showAlert("Logged In Successfully!", "success");
      // redirect
      navigate("/");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <h3 style={{ fontWeight: "bold", marginBottom: "30px" }}>
        Login to continue to{" "}
        <span style={{ color: "#ff800c" }}>miNotebook</span>
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            required
          />
        </div>
        <div style={{ marginBottom: "14px" }}>
          <Link to="/signup">Did Not have an account? Create an Account</Link>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{
            background: "#ff800c",
            color: "black",
            fontWeight: "bold",
            border: "1px solid black",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
