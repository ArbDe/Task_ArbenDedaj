import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SpaceMission from "./schema";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
export const DataContext = createContext();

function App() {
  const [data, setData] = useState([]);

  const loadSpaceMission = async () => {
    const spaceMission = await SpaceMission.getSpaceMission(10);
    setData(spaceMission);
  };

  useEffect(() => {
    loadSpaceMission();
  }, []);

  return (
    <>
      <DataContext.Provider value={data}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </DataContext.Provider>
    </>
  );
}

export default App;
