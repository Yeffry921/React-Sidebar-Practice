import { AiFillHome } from "react-icons/ai";
import { FaGamepad } from "react-icons/fa";

import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles["header-nav"]}>
        <div className={styles["header-icon"]}>
          <FaGamepad size={70} color="white" />
        </div>
        <div children="header-links">
          <div>
            <a href="">
              <AiFillHome />
              Home
            </a>
          </div>

          <div>
            <a href="">
              <AiFillHome />
              Library
            </a>
          </div>

          <div>
            <a href="">
              <AiFillHome />
              About
            </a>
          </div>

          <div>
            <a href="">
              <AiFillHome />
              Placeholder
            </a>
          </div>

          <div>
            <a href="">
              <AiFillHome />
              Placeholder
            </a>
          </div>
        </div>

        <div>Light/Dark Theme</div>
        <div>Logout div</div>
      </nav>
    </header>
  );
};
export default Header;
