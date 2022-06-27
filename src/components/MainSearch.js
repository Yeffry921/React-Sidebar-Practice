import React, { useState } from "react";
import { useEffect } from "react";

import placeholder from "../assets/profile-placeholder.png";
import styles from "./MainSearch.module.css";
import SearchBar from "./SearchBar";


const MainSearch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    const searchGame = async () => {
      const url = `https://api.rawg.io/api/games?key=6f59240c598f49feaf7fd46a9990b4ff&search=${searchTerm}`
      const data = await fetch(url)
      const response = await data.json()
      setData(response.results)
    }

    searchGame()
    
  }, [searchTerm])

  const getSearchTerm = (term) => {
    setSearchTerm(term)
  }

  return (
    <React.Fragment>
      <div className={styles["main-search"]}>
        <div className={styles.wrapper}>
          <SearchBar placeholder="Search games..." data={data} onGetSearch={getSearchTerm} />
          {/* <img src={placeholder} alt="" className="" /> */}
        </div>
      </div>
    </React.Fragment>
  );
};
export default MainSearch;
