import { NavBarLinks } from "./../../constants/navbar.js";
import styles from "./styles.module.scss";
import LiComponent from "../licomponent/LiComponent.jsx";

const NavBar = ({ changeRoute }) => {
  return (
    <div>
      <ul className={styles.mainNavBar}>
        {NavBarLinks.map((item) => (
          <LiComponent
            changeRoute={changeRoute}
            routeUrl={item.route}
            icon={item.icon}
            key={item.id}
            label={item.label}
          />
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
