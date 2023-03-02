import logo from "./logo.png";
import styles from "./styles.module.scss";

const Logo = () => {
  const LogoPic = <img src={logo} alt="" />;

  return <div className={styles.Logo}>{LogoPic}</div>;
};

export default Logo;
