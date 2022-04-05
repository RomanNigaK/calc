import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsAPI } from "../../api/api";
import { setStateProducts } from "../../redux/products-reduce";
import { doProductsIsLoaded } from "../../redux/actions";
import updateCost from "../../redux/actions";
import classNames from "classnames";
import "./Costs.css";

/* ========================================================================= */
const CostItem = ({ id, name, cost, dispatch }) => {
  const [ readOnly, switchReadonly ] = useState(true);
  const [ costState, setCost ] = useState(cost);

  const changeHandler = (e) => {
    setCost(e.target.value);
  }

  const saveChanges = (id, costState) => async () => {

    if (!readOnly) {
      dispatch(updateCost({ id: id, value: costState }));
      switchReadonly(true);
    } else {
      switchReadonly(false);
    }
  }

  return(
    <tr className="costs-item">
      <td className="costs-item__name">{ name }</td>
      <td className="costs-item__cost">
        <input onChange={ changeHandler } value={ costState } type="text" readOnly={ readOnly }/>
      </td>
      <td className="edit-icon">
        <button onClick={ saveChanges(id, costState) }>
          { readOnly ? "Edit" : "Save" }
        </button>
      </td>
      <td className="delete-icon"><button>Delete</button></td>
    </tr>
  )
}

/* ========================================================================= */
const renderProductCostsTable = (products, dispatch) => {
  return(
    <table>
      <thead>
        <tr>
          <th>Наименование</th>
          <th>Цена за кг</th>
        </tr>
      </thead>
      <tbody>
        { products.map((item, index) => {
            return <CostItem id={ item.id } name={ item.name } cost={ item.colt } dispatch={ dispatch } key={ "product" + item.id }/>
          })
        }
      </tbody>
    </table>
  )
}

/* ========================================================================= */
const renderEmptyMessage = () => <h3>Добавьте в базу хотя бы один продукт</h3>

/* ========================================================================= */
const Costs = () => {

  const productsIsLoaded = useSelector(state => state.productsIsLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!productsIsLoaded){
      productsAPI.setProducts()
        .then((data) => dispatch(setStateProducts(data)))
        .then(() => dispatch(doProductsIsLoaded()))
    }
  }, [productsIsLoaded]);

  const products = useSelector(state => state.productsreduce.products);


  return products.length !== 0 ? renderProductCostsTable(products, dispatch) : renderEmptyMessage()
}


export default Costs;
