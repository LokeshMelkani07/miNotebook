import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// POST: http://localhost:5000/api/auth/createUser

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createUser", {
      method: "POST",
      body: JSON.stringify({
        name: credentials.name,
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
      navigate("/");
      props.showAlert("Account Created Successfully!", "success");
    } else {
      props.showAlert("User with same email already exists", "danger");
    }
    // redirect
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Enter Your Name
          </label>
          <input
            name="name"
            type="text"
            value={credentials.name}
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            onChange={onChange}
            minLength={3}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            value={credentials.email}
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            value={credentials.password}
            className="form-control"
            id="password"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            name="cpassword"
            type="password"
            value={credentials.cpassword}
            className="form-control"
            id="cpassword"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
