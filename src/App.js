import React, {useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import styles from "./layout.module.css";

import Sidebar from "./components/Sidebar";
import Showcase from "./components/Showcase";
import About from "./components/About";
import MainSearch from "./components/MainSearch";

function App() {
  const [showcase, setShowcase] = useState([]);

  useEffect(() => {
    fetchShowcase();
  }, []);

  const fetchShowcase = async () => {
    const data = await fetch(
      "https://api.rawg.io/api/games?key=6f59240c598f49feaf7fd46a9990b4ff&metacritic=85,100&dates=2015-01-01,2022-03-31"
    );
    const response = await data.json();
    setShowcase(response.results);
  };

  return (
    <React.Fragment>
      <div className={styles.container}>
        <Sidebar />

        <main className={styles["main-container"]}>
          <MainSearch />
          <Routes>
            <Route path="/" element={<Showcase title="Popular Releases" showcase={showcase}/>}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
