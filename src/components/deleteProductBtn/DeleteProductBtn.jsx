import { DELETE } from "../../libs/HTTP";
import styles from "./styles.module.scss";

const DeleteProductBtn = ({ id, getData }) => {
  const deleteElement = () => {
    DELETE("products", "/" + id).then((data) => {
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

export default DeleteProductBtn;
