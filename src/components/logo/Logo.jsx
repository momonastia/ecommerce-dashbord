import logo from "./logo.png";
import "./index.css";

const Logo = () => {
  const LogoPic = <img src={logo} alt="" />;

  return <div className="Logo">{LogoPic}</div>;
};

export default Logo;
