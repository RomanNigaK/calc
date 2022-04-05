import React from "react";
import { connect } from "react-redux";
import Costs from "./Costs";
import { lodash as _ } from "lodash";



const mapStateToProps = (state) => {
  return {
    costs: state.productsreduce.products.map(product => {
      return { id: product.id, name: product.name, cost: product.colt }
    }),
    editable: state.costsEditable,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchEditable: () => dispatch({ type: "SWITCH_EDITABLE_COSTS" }),
    saveChangedCosts: (changedCosts) => dispatch({
      type: "SAVE_CHANGED_COSTS",
      payload: {
        costs: changedCosts,
      }
    }),
  }
}

const CostsContainer = connect(mapStateToProps, mapDispatchToProps)(Costs);

export default CostsContainer;
