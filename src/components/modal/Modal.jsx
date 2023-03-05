import CategoryForm from "../categoryForm/CategoryForm";
import styles from "./styles.module.scss";

const Modal = ({ setShowModal, data, getData }) => {
  return (
    <div className={styles.cover}>
      <div className={styles.modal}>
        <button
          className={styles.modalCloseBtn}
          onClick={() => setShowModal(false)}
        >
          X
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

export default Modal;
