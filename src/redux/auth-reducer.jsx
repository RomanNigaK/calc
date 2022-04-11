import {authAPI} from "../api/api";

const SETUSER = "SETUSER";
const SETENTERDATAFORM = "SETENTERDATAFORM";

let initialStore = {
    user: [
        {name: null, email: null, isAuth: false}
    ],
    isForm: 0 //0 - форма входа / 1 - форма регистрации


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
        default:
            return state;
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


export default authReducer;