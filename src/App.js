import React from "react";
import { Routes, Route } from "react-router-dom";

import styles from './layout.module.css'

import Header from "./components/Side";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Header />
        </div>

        <div className={styles["body-container"]}>
          <div className="body-search">
            <input type="text" placeholder="Placeholder input"/>
          </div>
          <div className={styles["body-output"]}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
