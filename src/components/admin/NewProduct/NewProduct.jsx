import React from "react";
import css from "./newproduct.module.css"
import {Field, reduxForm} from "redux-form";
import {float, maxlenghtall, reqfild, trueFalse} from "../../../utils/validator/validators";
import {Input} from "../../../common/FormsControl/FormsControl";

const NewProduct = (props) => {


    let addnewproduct = (value) => {
        console.log(value);
        props.newProductAdd(value)
    }

    return (
        <div className={css.formdiv}>
            <h3>Добавить > Новый продукт</h3>
            <AddNewProductRedux onSubmit={addnewproduct}/>


        </div>
    )
};
const maxcount = maxlenghtall(10);
const AddNewProduct = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name="name"
                       placeholder={"Наименование продукта"}
                       validate={[reqfild]}/>
            </div>
            <div>
                <Field placeholder="Объем единицы измерения" component={Input} validate={[reqfild, float]} name="tara" />
                <Field component={Input} validate={[reqfild]} name="edizm" placeholder={"Еденица измерения"}/>
            </div>
            <div>
                <Field component={Input} validate={[reqfild, float]} name="price" placeholder={"Стоимость"}/>
                <Field component={Input} validate={[reqfild, float]} name="count" placeholder={"Количество"}/>
            </div>
            <div>
                <Field component={Input} validate={[reqfild, float,trueFalse]} name="general" placeholder={"general"}/>
            </div>
            <div>
                <button>Добавить</button>
            </div>
        </form>
    )
};
const AddNewProductRedux = reduxForm({form: "newproduct"})(AddNewProduct)

export default NewProduct;