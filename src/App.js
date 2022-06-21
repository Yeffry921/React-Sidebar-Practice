import React from "react";
import { Routes, Route } from "react-router-dom";

import styles from "./layout.module.css";

import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import MainSearch from "./components/MainSearch";

function App() {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <Sidebar />

        <main className={styles["main-container"]}>
          <MainSearch />
          <div className={styles["body-output"]}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
