import Wrapper from "./UI/Wrapper";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";

import styles from "./Showcase.module.css";

const Showcase = ({ title, showcase, onHandleId }) => {
  return (
    <Wrapper className={styles.showcase}>
      <h1>{title}</h1>
      <div className={styles["showcase-wrapper"]}>
        {showcase.map((game) => {
          return (
            <div className={styles.card} key={game.id}>
              <div className={styles["card-header"]}>
                <img src={game.background_image} alt="rover" />
              </div>

              <div className={styles.controls}>
                <button className={styles.ctrlBtn}>
                  <MdAdd className={styles.ctrlSvg} size={20}/>
                </button>
              </div>
              <div className={styles["card-body"]}>
                <ul>
                  {game.parent_platforms.map(({ platform }) => {
                    return (
                      <li className={styles.system} key={platform.id}>
                        {platform.name}
                      </li>
                    );
                  })}
                </ul>
                <Link to="/game" onClick={() => onHandleId(game.id)}>
                  {game.name}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Showcase;
