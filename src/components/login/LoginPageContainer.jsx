import {connect} from "react-redux";
import LoginPage from "./LoginPage";
import {registration, setEnterDataForm, setRegistrationData} from "../../redux/auth-reducer";
import {getFormLogin, getIsRegistration} from "../../redux/selectors";

let mapStateToProps=(state)=>{
    return{
        isForm:getFormLogin(state),
        successfulRegistration:getIsRegistration(state)
    }
};

const LoginPageContainer = connect(mapStateToProps,{setEnterDataForm,setRegistrationData})(LoginPage);
export default LoginPageContainer;