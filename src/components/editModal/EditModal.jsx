import CategoryForm from "../categoryForm/CategoryForm";
import styles from "./styles.module.scss";
const EditModal = ({ setShowModal, data, getData }) => {
  return (
    <div className={styles.cover}>
      <div className={styles.modal}>
        <CategoryForm
          data={data}
          getData={getData}
          setShowModal={setShowModal}
        />
        <button onClick={() => setShowModal(false)}>Chiudi</button>
      </div>
    </div>
  );
};

export default EditModal;
