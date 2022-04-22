import {authAPI,postsApi} from "../api/api";
import recipesReducer from "./recipes-reducer";

import {SETCOUNTLIKE} from "./home-reducer"

const SETUSER = "SETUSER";
const SETENTERDATAFORM = "SETENTERDATAFORM";
const SETDATAUSER = "SETDATAUSER";
const SETSACCESSFULREG = "SETSACCESSFULREG";
const SETSEX = "SETSEX";
const LOGINERROR = "LOGINERROR";
const TOGGLELIKE = "TOGGLELIKE";
const SETUSERLIKEPOST = "SETUSERLIKEPOST";



let initialStore = {
    isAuth: false,
    user: [
        {name: null, email: null,mylike:"{\"like\": []}"}
    ],
    myListLike:"",
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
                user: action.data,
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
                loginError: action.text
            }

        }
        case SETDATAUSER: {


            return {
                ...state,
                user: [{name: null, email: null,mylike:"{\"like\": []}"}],
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
        case SETUSERLIKEPOST:{

            return  {
                ...state,
                myListLike: action.json

            }

        }
        case TOGGLELIKE:{
            console.log(JSON.parse(state.user[0].mylike));
            let idsLike = JSON.parse(state.user[0].mylike);
            action.obj.action==="like"?
                 idsLike.like.push(action.obj.idPost):
                 idsLike.like.splice(idsLike.like.indexOf(action.obj.idPost), 1)
                
            

            console.log(idsLike)
            return{
                ...state,
                 user:state.user.map((user) => { 
                     return {...user, mylike: JSON.stringify(idsLike)}
                })
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
        text: text
    }
};

export const setUser = (values) => {
    return async (dispatch) => {
        let data = await authAPI.login(values);
        if (data.resultCode == 1) {
            dispatch(loginError("Не верная пара логин/пароль"));
        } else {
            console.log(data);
            dispatch(setUserState(data.user));
            dispatch(loginError(""));
        }
    }
}

export const authMe = () => async dispatch => {

    let response = await authAPI.isAuthUser();

    if (response.resultCode === 0) {
          //  console.log(response[0].myPrice)
        dispatch(setUserState(response.user));
        dispatch(setUserLikePosts(response.user[0].mylike));
        console.log(response)
        return response
    }
    return response
}

export const setUserLikePosts=(json)=>{
    return{
        type:SETUSERLIKEPOST,
        json:json
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
    return async (dispatch) => {

        if (values.password == values.password2) {
            values['sex'] = sex;
            let response = await authAPI.registration(values);
            dispatch(setSuccessfulRegistration(response.resultCode));


        } else {
            dispatch(setSuccessfulRegistration({
                status: true,
                error: true,
                message: "The entered passwords do not match"
            }));
        }

    }
}
export const exitApp = () => {
    return (dispatch) => {
        authAPI.exitUser().then(response => {
            if (response.status === 200) {
                dispatch(setDataUser())
            }

        })
    }

}


export const setLikeList=(obj)=>{
    //console.log(obj);
    return async (dispatch)=>{

        let updateLike = await postsApi.updateLikeList(obj);
           // console.log(updateLike);
        let updateMyLike = await authAPI.updateMyLike(obj);  
        console.log(updateMyLike); 


        Promise.all([updateLike]);
        dispatch(toggleLike(obj));
        dispatch(setNewCountLike(updateLike));
    }
}

export const setNewCountLike=(response)=>{
      
    return{
        type:SETCOUNTLIKE,
        id:response.idPost,
        count:response.newLike
    }
}

export const toggleLike=(obj)=>{
    return{
        type:TOGGLELIKE,
        obj:obj
    }
}

export default authReducer;
