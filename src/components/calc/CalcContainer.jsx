import React from "react";
import {connect} from "react-redux";
import Calc from "./Calc";
import {
    closeHelp,
    getProducts,
    removeItemMyProduct,
    setColtItemMyProduct,
    setCountItemMyProduct,
    setItemMyProduct, setNullFind, setProducts, setSearch, setStateProducts,
    setWeightCake, showHelp, stateCalculation
} from "../../redux/products-reduce";



let mapStateToProps=(state)=>{

    return {
        products: state.productsreduce
    }
};



const CalcContainer = connect(mapStateToProps,
    {setStateProducts,setSearch,setNullFind,
        stateCalculation,removeItemMyProduct,setWeightCake,
        setItemMyProduct,setColtItemMyProduct,setCountItemMyProduct,
        getProducts,showHelp,closeHelp})(Calc);
export default CalcContainer;
