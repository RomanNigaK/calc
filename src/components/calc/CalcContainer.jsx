import React from "react";
import {connect} from "react-redux";
import Calc from "./Calc";
import {
    setColtItemMyProduct,
    setCountItemMyProduct,
    setItemMyProduct,
    setWeightCake, stateCalculation
} from "../../redux/products-reduce";


let mapStateToProps=(state)=>{

    return {
        products: state.productsreduce
    }
};



const CalcContainer = connect(mapStateToProps,{stateCalculation,setWeightCake,setItemMyProduct,setColtItemMyProduct,setCountItemMyProduct})(Calc);
export default CalcContainer;
