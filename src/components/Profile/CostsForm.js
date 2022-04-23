import React from "react";
import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";
import { productsAPI } from "../../api/api";
import styles from "./Profile.module.css";
import * as axios from "axios";
import { initializedApp } from "../../redux/app-reducer.jsx";


/* --------------------------------------------------------------------------- */
function CostItem({ item }) {

  return(
    <li key={ item.index } className={styles.item}>
      <span className={styles.item__name}>{item.name}</span>
      <Field
        className={styles.item__input}
        name={ `product_${item.id}` }
        component="input"
        type="number"
      />
    </li>
  )
}

const onSubmit = (dispatch, products) => async (values, form) => {
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

  try {
    const res = await productsAPI.updateProductItem(reqBody)
    await dispatch(initializedApp());
  } catch(err) {
    console.log(err);
  }
}

const isModify = (form) => {
  return Object.values(form.getState().modified).includes(true);
};

/* --------------------------------------------------------------------------- */
const CostsForm = ({ products }) => {

  const dispatch = useDispatch();
  const initialValues = {}
  products.forEach((item) => {
    initialValues[`product_${item.id}`] = item.colt;
  });

  return <Form
    onSubmit={onSubmit(dispatch, products)}
    initialValues={ initialValues }
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
                <button type="submit" disabled={submitting || pristine}>Сохранить</button>
                <button onClick={() => form.restart()} type="reset" disabled={submitting || pristine}>Сбросить</button>
              </>
              : null
          }
        </div>
        <div>
          {
            form.getState().submitting
              ? <strong>Отправляем...</strong>
              : null
          }
        </div>
      </form>
    )}
   />
}

export default CostsForm;
