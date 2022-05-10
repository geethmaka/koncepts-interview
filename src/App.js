import logo from "./logo.svg";
import "./App.css";
import UserDetails from "./components/UserDetails";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/users" exact element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
