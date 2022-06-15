import { AiFillHome } from "react-icons/ai";
import { FaGamepad } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles["header-nav"]}>
        <div className={styles["header-icon"]}>
          <FaGamepad size={70} color="#EFF2F4" />
        </div>
        <div children={styles["header-links"]}>
          <div className={styles.links}>
            <a href="">
              <AiFillHome size={25} />
              <span>Home</span>
            </a>
          </div>

          <div className={styles.links}>
            <a href="" className={styles.active}>
              <AiFillHome size={25} />
              <span>Library</span>
            </a>
          </div>

          <div className={styles.links}>
            <a href="">
              <AiFillHome size={25} />
              <span>About</span>
            </a>
          </div>

          <div className={styles.links}>
            <a href="">
              <AiFillHome size={25} />
              <span>Placeholder</span>
            </a>
          </div>

          <div className={styles.links}>
            <a href="">
              <AiFillHome size={25} />
              <span>Placeholder</span>
            </a>
          </div>

          <div className={`${styles.links}`}>
            <a href="">
              <FiLogOut size={25} />
              <span>Logout</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
