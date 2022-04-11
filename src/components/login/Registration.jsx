import React from "react";
import {Field, reduxForm} from "redux-form";

const Registration = (props) => {

    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component="input" name="email" placeholder={"Email"}/>
                </div>
                <div>
                    <Field component="input" name="name" placeholder={"You name"}/>
                </div>
                <div>
                    <Field component="input" name="specification" placeholder={"Specification"}/>
                </div>
                <div>
                    <Field component="input" name="password" placeholder={"Passsword"}/>
                </div>
                <div>
                    <Field component="input" name="password2" placeholder={"Repeat password "}/>
                </div>
                <div>
                    <button>Registration</button>
                </div>
            </form>
            <div>{props.successfulRegistration.status&&<h5>{props.successfulRegistration.message}</h5>}</div>
        </>
    )
};
const RegistrationForm = reduxForm({form:"registration"})(Registration);
export default RegistrationForm;