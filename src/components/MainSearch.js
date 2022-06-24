import React, { useState } from "react";

import placeholder from "../assets/profile-placeholder.png";
import styles from "./MainSearch.module.css";
import SearchBar from "./SearchBar";

const data = [
  { title: "New game" },
  { title: "New game2" },
  { title: "Hello" },
];

const MainSearch = () => {
  return (
    <React.Fragment>
      <div className={styles["main-search"]}>
        <div className={styles.wrapper}>
          <SearchBar placeholder="Search games..." data={data} />
          <img src={placeholder} alt="" className="" />
        </div>
      </div>
    </React.Fragment>
  );
};
export default MainSearch;
