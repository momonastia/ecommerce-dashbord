import { Fragment, useEffect, useState } from "react";
import { GET } from "../../libs/HTTP";
import { ImSpinner6 } from "react-icons/im";
import DeleteProductBtn from "../deleteProductBtn/DeleteProductBtn";
import EditProductBtn from "../editProductBtn/EditProductBtn";
import styles from "./styles.module.scss";
import Table from "../table/Table";

const Products = () => {
  const productStateObj = {
    product: [],
    loading: false,
  };

  const [productState, setProductState] = useState(productStateObj);

  const getData = () => {
    setProductState({ ...productState, loading: true });
    GET("products").then((data) =>
      setProductState({
        loading: false,
        product: data,
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.main}>
      {productState.loading ? (
        <ImSpinner6 />
      ) : (
        <Fragment>
          <div className={styles.tableHeader}>Products</div>
          <div className={styles.tableBody}>
            {productState.product.map((item, id) => (
              /* console.log(item.title); */
              <>
                <div className={styles.productListItem} key={item.id}>
                  <div className={styles.productListItemImage}>
                    <img src={item.images[0]} alt="" />
                  </div>
                  <div>{item.title}</div>
                  <div>Price: {item.price} $</div>
                  <div className={styles.buttons}></div>
                  <EditProductBtn getData={getData} />
                  <DeleteProductBtn getData={getData} id={item.id} />
                </div>
              </>
            ))}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Products;
