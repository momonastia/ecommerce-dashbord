import { useEffect, useState } from "react";
import { GET } from "../../libs/HTTP";
import { ImSpinner6 } from "react-icons/im";
import styles from "./styles.module.scss";
import Table from "../table/Table";
import Modal from "../modal/Modal";

const Categories = () => {
  const [showModal, setShowModal] = useState(false);

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
    <div className={styles.mainCategories}>
      {showModal && <Modal getData={getData} setShowModal={setShowModal} />}
      {categoryState.loading ? (
        <ImSpinner6 />
      ) : (
        <>
          <div className={styles.CategoriesHeader}>
            <button onClick={() => setShowModal(true)}>Add new category</button>
          </div>
          <Table getData={getData} categoryState={categoryState.category} />
        </>
      )}
    </div>
  );
};

export default Categories;
