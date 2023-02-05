import React from "react";
import "./App.css";
import Container from "./container/Container"
import { Route, Router, Routes } from "react-router";
import NavContext from "./context/NavContext"

import { useState, useEffect } from "react";
import Navbar from "./sidebar/Navbar";
import Dashboard from "./elements/Dashboard";

const App = () => {

  const [nav, setNav] = useState(false);
  const value = { nav, setNav };

  return (
    <>
      <div className="flex overflow-hidden">
        <NavContext.Provider value={value}>
            <Navbar />
            <Container
              content={
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
              }
            />
        </NavContext.Provider>
      </div>
    </>
  );
};

export default App;
