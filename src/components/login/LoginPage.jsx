import React from "react";
import css from "./login.module.css"
import Login, {LoginForm} from "./login";
import RegistrationForm from "./Registration";


const LoginPage = (props) => {

    let clickForm = (e) => {
        props.setEnterDataForm(e.target.id)

    };
    let registartion = (value) => {
        props.setRegistrationData(value,props.sex);
        //alert(value.name);

    };
    let login=(values)=>{

        props.setUser(values)
    }

    return (
        <>
            <h4>Для пользования некоторыми разделами сайта вам необходимо зарегистрироваться или авторизоваться</h4>
            <div className={css.content}>
                <div
                  id="0"
                  onClick={clickForm}
                  className={props.isForm == 0
                    ? css.loginuser + " " + css.activBorder
                    : css.loginuser + " " + css.deactivBorder}>
                    Enter
                </div>
                <div id="1" onClick={clickForm}
                     className={props.isForm == 1 ? css.registrationuser + " " + css.activBorder : css.registrationuser + " " + css.deactivBorder}>Registration
                </div>
                <div className={css.dataloginreg}>
                    {props.isForm == 0
                      ? <LoginForm
                          onSubmit={login}
                          errorLogin={props.loginError}
                          isAuth={props.isAuth}/> 
                      : <RegistrationForm
                          onSubmit={registartion}
                          successfulRegistration={props.successfulRegistration}
                          sex={props.sex}
                          setSex={props.setSex}/>}
                </div>
            </div>
        </>)
}


export default LoginPage;
