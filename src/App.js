import React from "react";
import { Routes, Route } from "react-router-dom";

import styles from "./layout.module.css";

import Sidebar from "./components/Sidebar";
import About from "./components/pages/About";
import MainSearch from "./components/MainSearch";
import Home from "./components/pages/Home";
import NewReleases from "./components/NewReleases";

function App() {

  return (
    <React.Fragment>
      <div className={styles.container}>
        <Sidebar />
        <main className={styles["main-container"]}>
          <MainSearch />
          <Routes>
            <Route path="/" element={<Home /> }></Route>
            <Route path="/new" element={<NewReleases />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
