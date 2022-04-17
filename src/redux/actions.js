import * as axios from "axios";
import {
  UPDATE_COST_SUCCESS,
  UPDATE_COST_FAILURE,
  UPDATE_COST_STARTED,
  PRODUCTS_HAS_BEEN_LOADED,
} from "./products-reduce";
import * as types from "./types";
import { productsAPI } from "../api/api";
import sleep from "../utils/sleep";



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
    ///const response = await productsAPI.updateProductItem(value, id);
    const response = await productsAPI.updateProductItem(1,[{total:2,products:[{id: 2, price: 200}, {id: 3, price: 400}]}]);
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



/*  ====== UPDATE USER COSTS =================================================== */
/* --------------------------------------- */
const prepareCostsToUpdate = (values) => {
  const updated = []
  Object.entries(values).forEach(([ key, value ]) => {
    const id = parseInt(key.split("_")[1]);
    updated.push({ id: id, price: value });
  });

  return updated;
}

/* --------------------------------------- */
export const updateUserCostsRequest = () => {
  return {
    type: types.UPDATE_USER_COSTS_REQUEST,
  }
}

/* --------------------------------------- */
const updateUserCostsSuccess = (updated) => {
  return {
    type: types.UPDATE_USER_COSTS_SUCCESS,
    payload: {
      updated,
    }
  }
}

/* --------------------------------------- */
const updateUserCostsFailure = (error) => {
  return {
    type: types.UPDATE_USER_COSTS_FAILURE,
    payload: {
      error,
    }
  }
}

/* --------------------------------------- */
export const updateUserCosts = (values) => async (dispatch) => {
  const updated = prepareCostsToUpdate(values);
  dispatch(updateUserCostsRequest());

  try {
    await sleep(500);
    const response = { code: 200 };
    dispatch(updateUserCostsSuccess(updated));
  } catch(e) {
    console.log(e.message)
    dispatch(updateUserCostsFailure(e));
  }
};
