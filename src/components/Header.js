import { Link } from "react-router-dom";

import { FaGamepad, FaThList } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoLibrarySharp } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import {
  AiOutlineGift,
  AiOutlineFire,
  AiFillHome,
  AiFillAppstore,
} from "react-icons/ai";

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
            <Link to="/">
              <AiFillHome size={25} />
              <span>Home</span>
            </Link>
          </li>

          <li className={styles.links}>
            <a href="#" className={styles.active}>
              <IoLibrarySharp size={25} />
              <span>My Library</span>
            </a>
          </li>

          <li className={styles.links}>
            <a href="#">
              <AiOutlineGift size={25} />
              <span>Wishlist</span>
            </a>
          </li>

          <li className={styles.links}>
            <a href="#">
              <AiOutlineFire size={25} />
              <span>New Releases</span>
            </a>
          </li>

          <li className={styles.links}>
            <Link to="/about">
              <FcAbout size={25} />
              <span>About</span>
            </Link>
          </li>

          <li className={styles.links}>
            <a href="#">
              <FaThList size={25} />
              <span>Platforms</span>
            </a>
          </li>

          <li className={styles.links}>
            <a href="#">
              <AiFillAppstore size={25} />
              <span>Genres</span>
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
