import { NavLink as Link } from "react-router-dom";

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

import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.icon}>
        <FaGamepad size={50} color="#EFF2F4" />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.links}>
            <Link
              to="/"
              className={({ isActive }) => (isActive ? styles.active : null)}
            >
              <AiFillHome size={25} />
              <span>Home</span>
            </Link>
          </li>

          <li className={styles.links}>
            <Link to='/library' className={({ isActive }) => (isActive ? styles.active : null)}>
              <IoLibrarySharp size={25} />
              <span>My Library</span>
            </Link>
          </li>

          <li className={styles.links}>
            <Link to="/wishlist" className={({ isActive }) => (isActive ? styles.active : null)}>
              <AiOutlineGift size={25} />
              <span>Wishlist</span>
            </Link>
          </li>

          <li className={styles.links}>
            <Link to="/newreleases" className={({ isActive }) => (isActive ? styles.active : null)}>
              <AiOutlineFire size={25} />
              <span>New Releases</span>
            </Link>
          </li>

          <li className={styles.links}>
            <Link
              to="/about"
              className={({ isActive }) => (isActive ? styles.active : null)}
            >
              <FcAbout size={25} />
              <span>About</span>
            </Link>
          </li>

          <li className={styles.links}>
            <Link to="/platforms" className={({ isActive }) => (isActive ? styles.active : null)}>
              <FaThList size={25} />
              <span>Platforms</span>
            </Link>
          </li>

          <li className={styles.links}>
            <Link to="/genres" className={({ isActive }) => (isActive ? styles.active : null)}>
              <AiFillAppstore size={25} />
              <span>Genres</span>
            </Link>
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
export default Sidebar;
