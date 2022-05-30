import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Recipe from "./Recipe";
// import Login from "./login";
// import SignUp from "./SignUp";

export default function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Navigate to={"/Recipe"}/>}/>
            {/* <Route path="/Login" element={ <Login/> } />
            <Route path="/SignUp" element={ <SignUp/> } /> */}
            <Route path="/Recipe" element={ <Recipe/> } />
          </Routes>
    </Router>
  );
}