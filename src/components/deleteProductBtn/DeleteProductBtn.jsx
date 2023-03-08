import { DELETE } from "../../libs/HTTP";
import styles from "./styles.module.scss";
import { AiOutlineDelete } from "react-icons/ai";

const DeleteProductBtn = ({ id, getData }) => {
  const deleteElement = () => {
    DELETE("products", "/" + id).then((data) => {
      console.log(data);
      getData();
    });
  };

  return (
    <button onClick={() => deleteElement()} className={styles.mainDeleteBtn}>
      <AiOutlineDelete />
    </button>
  );
};

export default DeleteProductBtn;
