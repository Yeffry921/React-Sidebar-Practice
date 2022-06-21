import React from "react";

import placeholder from "../assets/profile-placeholder.png";
import styles from "./MainSearch.module.css";

import { GrAdd } from 'react-icons/gr'

const MainSearch = () => {
  return (
    <React.Fragment>
      <div className={styles["main-search"]}>
        <form>
          <input type="search" placeholder="Search games..." />
        </form>
        

        <button>
          <GrAdd size={25}/>
        </button>

        <img src={placeholder} alt="" className="" />
      </div>
    </React.Fragment>
  );
};
export default MainSearch;
