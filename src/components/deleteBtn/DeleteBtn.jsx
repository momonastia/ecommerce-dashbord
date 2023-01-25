import { DELETE } from "../../libs/HTTP";
import styles from "./styles.module.scss";

const DeleteBtn = ({ id, getData }) => {
  const deleteElement = () => {
    DELETE("categories", "/" + id).then((data) => {
      console.log(data);
      getData();
    });
  };

  return (
    <button onClick={() => deleteElement()} className={styles.main}>
      Delete
    </button>
  );
};

export default DeleteBtn;
