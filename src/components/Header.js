import { AiFillHome } from "react-icons/ai";
import { FaGamepad } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.icon}>
        <FaGamepad size={70} color="#EFF2F4" />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.links}>
            <a href="#">
              <AiFillHome size={25} />
              <span>Home</span>
            </a>
          </li>

          <li className={styles.links}>
            <a href="#" className={styles.active}>
              <AiFillHome size={25} />
              <span>Library</span>
            </a>
          </li>

          <li className={styles.links}>
            <a href="#">
              <AiFillHome size={25} />
              <span>About</span>
            </a>
          </li>

          <li className={styles.links}>
            <a href="#">
              <AiFillHome size={25} />
              <span>Placeholder</span>
            </a>
          </li>

          <li className={styles.links}>
            <a href="#">
              <AiFillHome size={25} />
              <span>Placeholder</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className={`${styles.links} ${styles.logout}`}>
        <a href="#" className={`${styles.active}`}>
          <FiLogOut size={25} />
          <span>Logout</span>
        </a>
      </div>
    </header>
  );
};
export default Header;
