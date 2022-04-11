import {authAPI} from "../api/api";
import recipesReducer from "./recipes-reducer";

const SETUSER = "SETUSER";
const SETENTERDATAFORM = "SETENTERDATAFORM";
const SETDATAUSER = "SETDATAUSER";
const SETSACCESSFULREG = "SETSACCESSFULREG";

let initialStore = {
    user: [
        {name: null, email: null, isAuth: false}
    ],
    isForm: 0, //0 - форма входа / 1 - форма регистрации
    isRegistration:[{
        status:false,
        error:false,
        massage:""
    }]


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

export const setRegistrationData=(values)=>{
    return (dispatch)=>{
        authAPI.registration(values).then(response=>{
                dispatch(setSuccessfulRegistration(response.resultCode));
            }
        )
    }
}


export default authReducer;