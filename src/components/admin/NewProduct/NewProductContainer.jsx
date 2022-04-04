import NewProduct from "./NewProduct";
import {newProductAdd} from "../../../redux/products-reduce";
import {connect} from "react-redux";


const mapStateToProps=(state)=>{

    return{
        state:state
    }
};

const NewProductContainer = connect(mapStateToProps,{newProductAdd})(NewProduct);
export default NewProductContainer;