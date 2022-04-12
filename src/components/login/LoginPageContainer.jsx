import {connect} from "react-redux";
import LoginPage from "./LoginPage";
import {registration, setEnterDataForm, setRegistrationData, setSex, setUser} from "../../redux/auth-reducer";
import {getFormLogin, getIsAuth, getIsRegistration, getLoginError, getSex} from "../../redux/selectors";

let mapStateToProps=(state)=>{
    return{
        isForm:getFormLogin(state),
        successfulRegistration:getIsRegistration(state),
        sex:getSex(state),
        loginError:getLoginError(state),
        isAuth:getIsAuth(state)
    }
};

const LoginPageContainer = connect(mapStateToProps,{setUser,setSex,setEnterDataForm,setRegistrationData})(LoginPage);
export default LoginPageContainer;