import {connect} from "react-redux";
import LoginPage from "./LoginPage";
import {setEnterDataForm} from "../../redux/auth-reducer";

let mapStateToProps=(state)=>{
    return{isForm:state.auth.isForm}
};

const LoginPageContainer = connect(mapStateToProps,{setEnterDataForm})(LoginPage);
export default LoginPageContainer;