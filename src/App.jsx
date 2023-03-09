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

const App = () => {

  const [nav, setNav] = useState(false);
  const value = { nav, setNav };

  return (
    <>
      <div className="flex overflow-hidden ">
        <NavContext.Provider value={value}>
          <Navbar />
          <Container 
            content={
              <Routes>
                <Route path="/dashboard" element={<Dashboard  />} />
                <Route path="/co2" element={<Co2 />} />
                <Route path="/o2" element={<O2 />} />
                <Route path="/airquality" element={<AirQuality />} />
                <Route path="/airhumidity" element={<AirHumidity />} />
                <Route path="/temperature" element={<Temperature />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            }
          />
        </NavContext.Provider>
      </div>
    </>
  );
};

export default App;
