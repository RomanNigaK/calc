import {connect} from "react-redux";
import Products from "./Products";
import {getProducts} from "../../../redux/products-reduce";

const mapStateToProps=(state)=>{

    return{
        products:state.productsreduce.products
    }
};

const ProductsContainer = connect(mapStateToProps,{getProducts})(Products);
export default ProductsContainer;