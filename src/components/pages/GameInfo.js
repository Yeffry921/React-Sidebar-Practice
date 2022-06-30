import React, { useState, useEffect } from "react";
import Wrapper from "../UI/Wrapper";

import styles from "./GameInfo.module.css";

const GameInfo = ({ gameId }) => {
  const [game, setGame] = useState(null);
  const [displayWhole, setDisplayWhole] = useState(false);

  useEffect(() => {
    const searchGame = async () => {
      const url = `https://api.rawg.io/api/games/${gameId}?key=6f59240c598f49feaf7fd46a9990b4ff`;
      const data = await fetch(url);
      const response = await data.json();
      setGame(response);
    };

    searchGame();
  }, [gameId]);

  console.log(game);
  const handleText = () => {
    setDisplayWhole((prevState) => !prevState);
  };

  return (
    <Wrapper className={styles.gameLayout}>
      {game === null || game.name === "UNDEFINED" ? (
        <h1>Search for game</h1>
      ) : (
        <div className={styles.content}>
          <img src={game.background_image} alt="game image" />
          <h1>{game.name}</h1>

          <ul className={styles.platforms}>
            {game.platforms.map(({ platform }) => {
              return <li key={platform.id}>{platform.name}</li>;
            })}
          </ul>
          
          <div className={styles.flexWrapper}>
            <div className={styles.column}>
              <p className={styles.primary}>ESRB</p>
              <p className={styles.secondary}>{game.esrb_rating.name}</p>
            </div>

            <div className={styles.column}>
              <p className={styles.primary}>Metacritic</p>
              <p className={styles.secondary}>{game.metacritic}</p>
            </div>

            <div className={styles.column}>
              <p className={styles.primary}>Publisher</p>
              <p className={styles.secondary}>{game.publishers[0].name}</p>
            </div>

            <div className={styles.column}>
              <p className={styles.primary}>Genre</p>
              <p className={styles.secondary}>{game.genres[0].name}</p>
            </div>
            </div>
            
          <div className={styles.description}>
            <h2>Description</h2>
            <p
              className={displayWhole === false ? styles.hide : styles.show}
              onClick={handleText}
            >
              {game.description_raw}
            </p>
          </div>
        </div>
      )}
    </Wrapper>
  );
};
export default GameInfo;
