import CategoryForm from "../categoryForm/CategoryForm";
import styles from "./styles.module.scss";
const EditModal = ({ setShowModal, data, getData }) => {
  return (
    <div className={styles.cover}>
      <div className={styles.modal}>
        <button
          className={styles.modalCloseBtn}
          onClick={() => setShowModal(false)}
        >
          +
        </button>
        <CategoryForm
          data={data}
          getData={getData}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
};

export default EditModal;
