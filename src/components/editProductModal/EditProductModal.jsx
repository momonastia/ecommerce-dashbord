import ProductForm from "../productForm/ProductForm";
import styles from "./styles.module.scss";

const EditProductModal = ({ setShowModal, data, getData }) => {
  return (
    <div className={styles.cover}>
      <div className={styles.modal}>
        <ProductForm
          data={data}
          getData={getData}
          setShowModal={setShowModal}
        />
        <button onClick={() => setShowModal(false)}>Chiudi</button>
      </div>
    </div>
  );
};

export default EditProductModal;
