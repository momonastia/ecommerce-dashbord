import DeleteBtn from "../deleteBtn/DeleteBtn";
import EditBtn from "../editBtn/EditBtn";
import styles from "./styles.module.scss";

const Table = ({ categoryState, getData, loading }) => {
  return (
    <div className={styles.main}>
      <div className={styles.tableHeader}>Categories</div>
      <div className={styles.tableBody}>
        {categoryState.map((item) => (
          <div className={styles.tableRow} key={item.id}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <div className={styles.buttons}>
              <EditBtn
                data={{ name: item.name, image: item.image, id: item.id }}
                getData={getData}
              />
              <DeleteBtn getData={getData} id={item.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
