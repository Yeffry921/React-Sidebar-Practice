import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";

import styles from "./layout.module.css";

import Sidebar from "./components/Sidebar";
import About from "./components/pages/About";
import MainSearch from "./components/MainSearch";
import Home from "./components/pages/Home";
import NewReleases from "./components/NewReleases";
import GameInfo from "./components/pages/GameInfo";


function App() {
  const [id, setId] = useState()

  const getGameId = (id) => {
    setId(id)
  }
  
  return (
    <React.Fragment>
      <div className={styles.container}>
        <Sidebar  />
        <main className={styles["main-container"]}>
          <MainSearch onGetId={getGameId}/>
          <Routes>
            <Route path="/" element={<Home onGetId={getGameId} /> }></Route>
            <Route path="/new" element={<NewReleases onGetId={getGameId} />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/game" element={<GameInfo gameId={id} />} ></Route>
          </Routes>
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
