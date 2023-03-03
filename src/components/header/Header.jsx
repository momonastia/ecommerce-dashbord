import Logo from "../logo";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.mainHeader}>
      <Logo />
    </div>
  );
};

export default Header;
