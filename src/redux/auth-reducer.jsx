import {authAPI} from "../api/api";
import recipesReducer from "./recipes-reducer";

const SETUSER = "SETUSER";
const SETENTERDATAFORM = "SETENTERDATAFORM";
const SETDATAUSER = "SETDATAUSER";
const SETSACCESSFULREG = "SETSACCESSFULREG";
const SETSEX = "SETSEX";
const LOGINERROR = "LOGINERROR";

let initialStore = {
    isAuth: false,
    user: [
        {name: null, email: null}
    ],
    isForm: 0, //0 - форма входа / 1 - форма регистрации
    isRegistration: [{
        status: false,
        error: false,
        massage: ""
    }],
    sex: "man",
    loginError: ""


};

const authReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SETUSER: {
            return {
                ...state,
                user:action.data,
                isAuth: true
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
        case LOGINERROR: {

            return {
                ...state,
                loginError:action.text
            }

        }
        case SETDATAUSER: {

            return {
                ...state,
                user: [],
                isAuth: false

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
        default: {
            if (state.isRegistration.error == false) {
                return {
                    ...state,
                    isRegistration: {status: false, message: ""}
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

const loginError = (text) => {
    return {
        type: LOGINERROR,
        text:text
    }
};

export const setUser = (values) => {
    return (dispatch) => {
        authAPI.login(values).then(data => {
            console.log(data);
            if (data.resultCode == 1) {
                dispatch(loginError("Не верная пара логи пароль"));
            }else{
                dispatch(setUserState(data.user));
                dispatch(loginError(""));
            }

        })
    }
}
export const authMe=()=>{
    return (dispatch)=>{
        authAPI.isAuthUser().then(response=>{
               if(response.length===1){
                   dispatch(setUserState(response));
               }
        }

        );


    }
}
export const setEnterDataForm = (idForm) => {
    return {
        type: SETENTERDATAFORM,
        form: idForm
    }
}

const setDataUser = () => {
    return {
        type: SETDATAUSER

    }
};
const setSuccessfulRegistration = (resultCode) => {
    return {
        type: SETSACCESSFULREG,
        resultCode: resultCode

    }
};

export const setSex = (sex) => {
    return {
        type: SETSEX,
        sex: sex
    }
}
export const setRegistrationData = (values, sex) => {
    return (dispatch) => {

        if (values.password == values.password2) {
            values['sex'] = sex;
            authAPI.registration(values).then(response => {
                    dispatch(setSuccessfulRegistration(response.resultCode));
                }
            )
        } else {
            dispatch(setSuccessfulRegistration({
                status: true,
                error: true,
                message: "The entered passwords do not match"
            }));
        }

    }
}
export const exitApp=()=>{
   return  (dispatch)=>{
        authAPI.exitUser().then(response=>{
            if(response.status===200){
                dispatch(setDataUser())
            }

       })
    }

}

export default authReducer;