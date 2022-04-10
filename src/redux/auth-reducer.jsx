import {authAPI} from "../api/api";

const SETUSER="SETUSER";

let initialStore = {
    name:null,
    email:null,
    isAuth:false

};
const authReducer=(state=initialStore,action)=>{
    switch (action.type) {
        case SETUSER:{
            return {
                ...state,
                ...action.data
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

export const setUser=()=>{
    return (dispatch)=>{
        authAPI.getUser().then(data=>{
            console.log(data);
        })
}
}

export default authReducer;