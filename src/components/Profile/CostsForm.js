import React from "react";
import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";
import styles from "./Profile.module.css";
import { updateUserCosts } from "../../redux/actions";

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

const onSubmit = (dispatch) => (values) => {
  dispatch(updateUserCosts(values));
}

const isModify = (form) => {
  return Object.values(form.getState().modified).includes(true);
};

/* --------------------------------------------------------------------------- */
const CostsForm = ({ products }) => {
  const dispatch = useDispatch();
  return <Form
    onSubmit={onSubmit(dispatch)}
    render={ ({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={ handleSubmit }>

        <div className={styles.costs}>
          <ul className={styles.costs__ul}>
            {
              products.map((item) => <CostItem item={item} />)
            }
          </ul>
          { console.log(form.getState()) }
          {
            form.getState().dirty
              ? <>
                <button type="submit">Сохранить</button>
                <button onClick={() => form.restart()} type="reset">Сбросить</button>
              </>
              : null
          }
<<<<<<< HEAD
=======
          { console.log(submitting) }
>>>>>>> Update CostsForm.js
        </div>
      </form>
    )}
   />
}

export default CostsForm;
