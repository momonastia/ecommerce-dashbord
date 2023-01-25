import { useState } from "react";
import Categories from "../categories/Categories";
import Products from "../products/Products";
import Home from "../home/Home";
import NavBar from "../navbar/NavBar";
import styles from "./styles.module.scss";

const Container = () => {
  const [route, setRoute] = useState("home");

  const changeRoute = (routeparam) => setRoute(routeparam);

  return (
    <div className={styles.main}>
      <div className={styles.sxColumn}>
        <NavBar changeRoute={changeRoute} />
      </div>
      <div className={styles.dxColumn}>
        {route === "home" && <Home />}
        {route === "products" && <Products />}
        {route === "categories" && <Categories />}
        {route === "orders" && <div>orders</div>}
        {route === "payments" && <div>payments</div>}
        {route === "statistics" && <div>statistics</div>}
        {route === "personal area" && <div>personal area</div>}
        {route === "settings" && <div>settings</div>}
      </div>
    </div>
  );
};

export default Container;
