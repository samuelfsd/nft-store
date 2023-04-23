import Search from "../../assets/icons/Search";
import Lock from "../../assets/icons/Lock";
import Hamburger from "../../assets/icons/Hamburger";

import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.menuContainer}>
        <div className={styles.logo}>Club</div>
        <li>
          <span>Art </span>
          <span>/</span>
        </li>
        <li>
          <span>Commynity </span>
          <span>/</span>
        </li>
        <li>
          <span>Magazine </span>
          <span>/</span>
        </li>
        <li>
          <span>Shop </span>
        </li>
      </ul>

      <ul className={styles.userInfoContainer}>
        <li>
          <span>
            <Search />
          </span>
        </li>
        <li>
          <span>
            <Lock />
          </span>
          <span>Sign In </span>
        </li>
        <li>
          <span>
            <Hamburger />
          </span>
        </li>
      </ul>
    </header>
  );
}
