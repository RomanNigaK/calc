import React from "react";
import {Field, handleSubmit, reduxForm} from "redux-form";
import {useNavigate} from "react-router";




const Login = (props) => {
    //const shouldRedirect = true;

    const navigate = useNavigate();

    React.useEffect(() => {
        if (props.isAuth) {
            navigate('/profile');
        }
    });
    return (


        <>
            <form onSubmit={props.handleSubmit}>

                <div>
                   <Field component="input" name="email" placeholder={"Login"}/>
                </div>
                <div>
                    <Field component="input" name="password" placeholder={"Password"}/>
                </div>

                <div>
                    <button>Enter</button>
                </div>
                <div><h4>{props.errorLogin}</h4></div>
            </form>
        </>
    )
};
export const LoginForm = reduxForm({form:"login"})(Login);
