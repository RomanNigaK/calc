import {authAPI} from "../api/api";
import recipesReducer from "./recipes-reducer";

const SETUSER = "SETUSER";
const SETENTERDATAFORM = "SETENTERDATAFORM";
const SETDATAUSER = "SETDATAUSER";
const SETSACCESSFULREG = "SETSACCESSFULREG";
const SETSEX = "SETSEX";

let initialStore = {
    user: [
        {name: null, email: null, isAuth: false}
    ],
    isForm: 0, //0 - форма входа / 1 - форма регистрации
    isRegistration:[{
        status:false,
        error:false,
        massage:""
    }],
    sex:"man"


};

const authReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SETUSER: {
            return {
                ...state,
                ...action.data
            }
        }
        case SETENTERDATAFORM: {
            if (state.isForm !== action.form) {
                return {
                    ...state,
                    isForm: action.form
                }
            }
        }
        case SETDATAUSER: {

                return {
                    ...state,
                    user: action.data
                }

        }
        case SETSACCESSFULREG: {

                return {
                    ...state,
                    isRegistration: action.resultCode
                }

        }
        case SETSEX: {

                return {
                    ...state,
                    sex: action.sex
                }

        }
        default:{
            if(state.isRegistration.error==false){
                return {
                    ...state,
                    isRegistration: {status:false,message:""}
                }
            }
            return state;
        }

    }
};

const setUserState = (data) => {
    return {
        type: SETUSER,
        data: data
    }
};

export const setUser = () => {
    return (dispatch) => {
        authAPI.getUser().then(data => {
            console.log(data);
        })
    }
}
export const setEnterDataForm = (idForm) => {
    return {
        type: SETENTERDATAFORM,
        form: idForm
    }
}

const setDataUser=(data)=>{
    return{
        type:SETDATAUSER,
        data:data
    }
};
const setSuccessfulRegistration =(resultCode)=>{
    return{
        type:SETSACCESSFULREG,
        resultCode:resultCode

    }
};

export const setSex=(sex)=>{
    return{
        type:SETSEX,
        sex:sex
    }
}
export const setRegistrationData=(values,sex)=>{
    return (dispatch)=>{

        if(values.password==values.password2){
            values['sex']=sex;
            authAPI.registration(values).then(response=>{
                    dispatch(setSuccessfulRegistration(response.resultCode));
                }
            )
        }else{
            dispatch(setSuccessfulRegistration({status:true,error:true,message:"The entered passwords do not match"}));
        }

    }
}


export default authReducer;