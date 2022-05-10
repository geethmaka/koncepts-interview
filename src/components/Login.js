import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/login.css";
// const CryptoJS = require("crypto-js");
// require("dotenv").config();

function Login() {
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser != null) {
      window.location = "/users";
    }
  }, []);

  let [user, setUser] = useState("");
  let [pass, setPass] = useState("");

  const submit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/employee/login", {
        username: user,
        password: pass,
      })
      .then((res) => {
        if (res.data == "granted") {
          localStorage.setItem("user", user);
          window.location = "/users";
        } else {
          console.log(res.data);
        }
      });
  };

  return (
    <div>
      <h3 className="header">Login</h3>
      <form className="login" onSubmit={submit}>
        <input
          className="Uname"
          type="text"
          placeholder="email"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <input
          className="Pass"
          type="password"
          placeholder="password"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
