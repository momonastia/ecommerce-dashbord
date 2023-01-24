import { useEffect, useState } from "react";
import GET from "../../libs/HTTP";
import { ImSpinner6 } from "react-icons/im";
import styles from "./styles.module.scss";
import Table from "../table/Table";

const Categories = () => {
  const categoryStateObj = {
    category: [],
    loading: false,
  };

  const [categoryState, setCategoryState] = useState(categoryStateObj);

  const getData = () => {
    setCategoryState({ ...categoryState, loading: true });
    GET("categories").then((data) =>
      setCategoryState({
        loading: false,
        category: data,
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.main}>
      {categoryState.loading ? (
        <ImSpinner6 />
      ) : (
        <Table categoryState={categoryState.category} />
      )}
    </div>
  );
};

export default Categories;
