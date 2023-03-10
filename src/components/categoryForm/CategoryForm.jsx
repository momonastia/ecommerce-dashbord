import { useEffect, useState } from "react";
import { POST, PUT } from "../../libs/HTTP";
import styles from "./styles.module.scss";

const CategoryForm = ({ setShowModal, getData, data }) => {
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({
    name: "",
    image: "",
  });

  useEffect(() => {
    if (data) {
      setForm({
        name: data.name,
        image: data.image,
      });
      setEdit(true);
    }
  }, []);

  const handleForm = (input, e) => {
    setForm({
      ...form,
      [input]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    POST("categories", form).then((data) => {
      console.log(data);
      if (data.status === 201) {
        setShowModal(false);
        getData();
      }
    });
  };

  const editForm = (e) => {
    e.preventDefault();
    PUT("categories", form, "/" + data.id).then((data) => {
      console.log("put data>>>", data);
      if (data.status === 200) {
        setShowModal(false);
        getData();
      }
    });
  };

  return (
    <form className={styles.CategoryForm}>
      <input
        type="text"
        value={form.name}
        onChange={(e) => handleForm("name", e)}
        placeholder="Category name"
      />
      <input
        type="text"
        value={form.image}
        onChange={(e) => handleForm("image", e)}
        placeholder="Category image URL"
      />

      {edit ? (
        <button
          type="submit"
          className={styles.EditBtn}
          onClick={(e) => editForm(e)}
        >
          Edit
        </button>
      ) : (
        <button
          type="submit"
          className={styles.SendBtn}
          onClick={(e) => submitForm(e)}
        >
          Send
        </button>
      )}
    </form>
  );
};

export default CategoryForm;
