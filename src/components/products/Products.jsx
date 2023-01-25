import { useEffect, useState } from "react";
import { GET } from "../../libs/HTTP";
import { ImSpinner6 } from "react-icons/im";
import styles from "./styles.module.scss";
import Table from "../table/Table";

const Products = () => {
  const productStateObj = {
    product: [],
    loading: false,
  };

  const [productState, setProductState] = useState(productStateObj);

  const getData = () => {
    setProductState({ ...productState, loading: true });
    GET("products").then((data) =>
      setProductState({
        loading: false,
        product: data,
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.main}>
      {productState.loading ? (
        <ImSpinner6 />
      ) : (
        <Table productState={productState.product} />
      )}
    </div>
  );
};

export default Products;
