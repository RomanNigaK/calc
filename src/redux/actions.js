import * as axios from "axios";
import {
  UPDATE_COST_SUCCESS,
  UPDATE_COST_FAILURE,
  UPDATE_COST_STARTED,
  PRODUCTS_HAS_BEEN_LOADED,
} from "./products-reduce";
import { productsAPI } from "../api/api";
const apiURL = "http://fortestreactnode-js.ru/";



const updateCostSuccess = () => ({
  type: UPDATE_COST_SUCCESS,
});

const updateCostFailure = (err) => ({
  type: UPDATE_COST_FAILURE,
  payload: err,
});

const updateCostStarted = () => ({
  type: UPDATE_COST_STARTED,
});

const updateCost = ({ id, value }) => async (dispatch) => {

  dispatch(updateCostStarted());

  try {
    const response = await productsAPI.updateProductItem(value, id);
    dispatch(updateCostSuccess());
  } catch(e) {
    console.log(e.message)
    dispatch(updateCostFailure(e));
  }
};

/*  =============== */
export const doProductsIsLoaded = () => {
  return {
    type: PRODUCTS_HAS_BEEN_LOADED,
  }
}

export default updateCost;