import React from "react";
import "./App.css";
import Container from "./container/Container"
import { Route, Router, Routes } from "react-router";
import NavContext from "./context/NavContext"

import { useState, useEffect } from "react";
import Navbar from "./sidebar/Navbar";

// Views
import Dashboard from "./elements/Dashboard";
import Co2 from "./elements/Co2";
import O2 from "./elements/O2";
import AirHumidity from "./elements/AirHumidity";
import AirQuality from "./elements/AirQuality";
import Temperature from "./elements/Temperature";
import Settings from "./elements/Settings";
import {darkMode, lightMode} from "./Mode.js";
import Info from "./elements/Info.jsx";

const App = () => {

  const [nav, setNav] = useState(false);
  const value = { nav, setNav };


  return (
    <>
      <div id="app" className="flex overflow-hidden bg-[#212121]" >
        <NavContext.Provider value={value}>
          <Navbar />
          <Container 
            content={
              <Routes>
                <Route path="/dashboard" element={<Dashboard  />} />
                <Route path="/co2" element={<Co2 />} />

                <Route path="/temperature" element={<Temperature />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/info" element={<Info />} />
              </Routes>
            }
          />
        </NavContext.Provider>
      </div>
    </>
  );
};

export default App;
