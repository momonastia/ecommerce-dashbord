import { useState } from "react";
import EditProductModal from "../editProductModal/EditProductModal";
import styles from "./styles.module.scss";
import { AiOutlineEdit } from "react-icons/ai";

const EditProductBtn = ({ data, getData }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <EditProductModal
          getData={getData}
          data={data}
          setShowModal={setShowModal}
        />
      )}
      <button onClick={() => setShowModal(true)} className={styles.mainEditBtn}>
        <AiOutlineEdit />
      </button>
    </>
  );
};

export default EditProductBtn;
