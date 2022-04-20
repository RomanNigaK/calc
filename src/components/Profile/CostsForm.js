import React from "react";
import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";
import styles from "./Profile.module.css";
import { updateUserCosts } from "../../redux/actions";
import * as axios from "axios";

/* --------------------------------------------------------------------------- */
function CostItem({ item }) {

  return(
    <li key={ item.index } className={styles.item}>
      <span className={styles.item__name}>{item.name}</span>
      <Field
        className={styles.item__input}
        name={ `product_${item.id}` }
        component="input"
        initialValue={item.colt}
        type="text"
      />
    </li>
  )
}

const onSubmit = async (values, form) => {
  const formState = form.getState();
  const dirtyFields = formState.dirtyFields;
  const products = Object.keys(dirtyFields).map((key) => {
    return {
      id: parseInt(key.split("_")[1]),
      price: parseInt(values[key]),
    };
  });
  const reqBody = {
    total: products.length,
    products,
  };

  const res = await axios.put("https://fortestreactnode-js.ru/products/", reqBody);
  console.log(res);
}

const isModify = (form) => {
  return Object.values(form.getState().modified).includes(true);
};

/* --------------------------------------------------------------------------- */
const CostsForm = ({ products }) => {
  const dispatch = useDispatch();
  return <Form
    onSubmit={onSubmit}
    render={ ({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={ handleSubmit }>

        <div className={styles.costs}>
          <ul className={styles.costs__ul}>
            {
              products.map((item) => <CostItem item={item} />)
            }
          </ul>
          {
            form.getState().dirty
              ? <>
                <button type="submit">Сохранить</button>
                <button onClick={() => form.restart()} type="reset">Сбросить</button>
              </>
              : null
          }
        </div>
      </form>
    )}
   />
}

export default CostsForm;
