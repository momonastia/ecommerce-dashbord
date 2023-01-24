import styles from "./styles.module.scss";

const Table = ({ categoryState }) => {
  return (
    <div className={styles.main}>
      <div className={styles.tableHeader}>Categories</div>
      <div className={styles.tableBody}>
        {categoryState
          .filter(
            (item) =>
              item.name === "Electronics" ||
              item.name === "Clothes" ||
              item.name === "Shoes" ||
              item.name === "Others"
          )
          .map((item) => (
            <div className={styles.tableRow} key={item.id}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Table;
