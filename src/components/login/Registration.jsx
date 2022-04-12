import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input2, InputSex} from "../../common/FormsControl/FormsControl";
import {email, reqfild} from "../../utils/validator/validators";
import girl from "./../../common/FormsControl/girl.svg"
import boy from "./../../common/FormsControl/boy.svg"
import css from "./login.module.css"

const Registration = (props) => {
    const genderSelextion = (e) => {
        //alert(e.target.alt)
        props.setSex(e.target.alt)
    }

    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Input2} validate={[reqfild, email]} name="email" placeholder={"Email"}/>
                </div>
                <div>
                    <Field component={Input2} validate={[reqfild]} name="name" placeholder={"You name"}/>
                </div>
                <div className={css.sexImg}>
                    <img onClick={genderSelextion} className={props.sex == "man" ? css.activseximg : css.deactivseximg}
                         src={boy} alt="man"/>
                    <img onClick={genderSelextion} className={props.sex == "girl" ? css.activseximg : css.deactivseximg}
                         src={girl} alt="girl"/>
                </div>
              {/* <div>
                    <Field component={InputSex} validate={[reqfild]} name="sex" sex={props.sex} />
                </div>*/}
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
            <div>{props.successfulRegistration.status && <h5>{props.successfulRegistration.message}</h5>}</div>
        </>
    )
};
const RegistrationForm = reduxForm({form: "registration",

    initialValues: {
        sex: "man"

    }})(Registration);
export default RegistrationForm;