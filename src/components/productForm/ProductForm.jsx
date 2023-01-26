import { useEffect, useState } from "react";
import { POST, PUT } from "../../libs/HTTP";
import styles from "./styles.module.scss";

const ProductForm = ({ setShowModal, getData, data }) => {
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    categoryId: "",
    images: [],
  });

  useEffect(() => {
    if (data) {
      setForm({
        title: data.title,
        images: data.images,
      });
      setEdit(true);
    }
  }, []);

  const handleForm = (input, e) => {
    let inputValue = e.target.value ? e.target.value : 0;
    if (input === "price" || input === "categoryId") {
      console.log("Price if");
      inputValue = Number(inputValue);
    }

    if (input === "images") {
      inputValue = [inputValue];
    }
    setForm({
      ...form,
      [input]: inputValue,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    POST("products", form).then((data) => {
      console.log(data);
      if (data.status === 201) {
        setShowModal(false);
        getData();
      }
    });
  };

  const editForm = (e) => {
    e.preventDefault();
    PUT("products", form, "/" + data.id).then((data) => {
      console.log(data);
      if (data.status === 200) {
        setShowModal(false);
        getData();
      }
    });
  };

  return (
    <form>
      <input
        type="text"
        value={form.title}
        onChange={(e) => handleForm("title", e)}
        placeholder="Title"
      />
      <input
        type="text"
        value={form.price}
        onChange={(e) => handleForm("price", e)}
        placeholder="Price"
      />
      <input
        type="text"
        value={form.description}
        onChange={(e) => handleForm("description", e)}
        placeholder="Description"
      />
      <input
        type="text"
        value={form.categoryID}
        onChange={(e) => handleForm("categoryId", e)}
        placeholder="Category Id"
      />
      <input
        type="text"
        value={form.images}
        onChange={(e) => handleForm("images", e)}
        placeholder="Image"
      />

      {edit ? (
        <button type="submit" onClick={(e) => editForm(e)}>
          edit
        </button>
      ) : (
        <button type="submit" onClick={(e) => submitForm(e)}>
          invia
        </button>
      )}
    </form>
  );
};

export default ProductForm;
