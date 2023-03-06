import { useState } from "react";
import EditModal from "../editModal/EditModal";
import styles from "./styles.module.scss";
import { AiOutlineEdit } from "react-icons/ai";

const EditBtn = ({ data, getData }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <EditModal getData={getData} data={data} setShowModal={setShowModal} />
      )}
      <button onClick={() => setShowModal(true)} className={styles.mainEditBtn}>
        <AiOutlineEdit />
      </button>
    </>
  );
};

export default EditBtn;
