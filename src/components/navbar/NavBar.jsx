import { NavBarLinks } from "./../../constants/navbar.js";
import styles from "./styles.module.scss";
import { HiUser } from "react-icons/hi";

const NavBar = () => {
  return (
    <div>
      <ul className={styles.main}>
        <HiUser />
        {NavBarLinks.map((item) => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
