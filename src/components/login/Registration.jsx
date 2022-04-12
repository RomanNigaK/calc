import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input2} from "../../common/FormsControl/FormsControl";
import {email, reqfild} from "../../utils/validator/validators";

const Registration = (props) => {


    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Input2} validate={[reqfild,email]}  name="email" placeholder={"Email"}/>
                </div>
                <div>
                    <Field component={Input2} validate={[reqfild]} name="name" placeholder={"You name"}/>
                </div>
                <div>
                    <Field component={Input2} validate={[reqfild]} name="specification" placeholder={"Specification"}/>
                </div>
                <div>
                    <Field component={Input2} validate={[reqfild]} name="password" placeholder={"Passsword"}/>
                </div>
                <div>
                    <Field component={Input2} validate={[reqfild]} name="password2" placeholder={"Repeat password "}/>
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