import {connect} from "react-redux";
import LoginPage from "./LoginPage";
import {registration, setEnterDataForm, setRegistrationData, setSex} from "../../redux/auth-reducer";
import {getFormLogin, getIsRegistration, getSex} from "../../redux/selectors";

let mapStateToProps=(state)=>{
    return{
        isForm:getFormLogin(state),
        successfulRegistration:getIsRegistration(state),
        sex:getSex(state)
    }
};

const LoginPageContainer = connect(mapStateToProps,{setSex,setEnterDataForm,setRegistrationData})(LoginPage);
export default LoginPageContainer;