import { useState } from "react";
import EditModal from "../editModal/EditModal";
import styles from "./styles.module.scss";

const EditBtn = ({ data, getData }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <EditModal getData={getData} data={data} setShowModal={setShowModal} />
      )}
      <button onClick={() => setShowModal(true)} className={styles.main}>
        Edit
      </button>
    </>
  );
};

export default EditBtn;
