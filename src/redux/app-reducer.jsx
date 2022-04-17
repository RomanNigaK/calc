import {authMe} from "./auth-reducer";
import {getProducts} from "./products-reduce";

const INITIALIZED_SUCCESSFUL = "INITIALIZED_SUCCESSFUL";


let initialStore = {
    initialized: false,
};

const appReducer = (state = initialStore, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESSFUL: {
            return {
                ...state,
                initialized: true
            }
        }

        default:
            return state;
    }
};

const setInitialized = () => {
    return {type: INITIALIZED_SUCCESSFUL}
};

export const initializedApp = () => async (dispatch) => {
    let NotIsAuthUser = "[{\"total\":0,\"products\":[]}]"
    let promiseAuthMe = await dispatch(authMe());

    console.log(promiseAuthMe)

    let promiseProducts = await dispatch(getProducts(!promiseAuthMe.resultCode ? promiseAuthMe.user[0].myprice : NotIsAuthUser));


    Promise.all([promiseAuthMe, promiseProducts]);
    dispatch(setInitialized());
}

export default appReducer;