import styles from "./Showcase.module.css";

const Showcase = (props) => {
  return (
    <section className={styles.showcase}>
      <h1>{props.title}</h1>
      <div className={styles['showcase-wrapper']}>
        {props.showcase.map((game) => {
          return (
            <div className={styles.card} key={game.id}>
              <div className={styles["card-header"]}>
                <img src={game.background_image} alt="rover" />
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
                <h3>{game.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Showcase;
