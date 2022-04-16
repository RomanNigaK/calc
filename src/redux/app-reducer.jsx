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

const setInitialized = () => {return {type: INITIALIZED_SUCCESSFUL}};

export const initializedApp =()=>(dispatch)=>{
        let promiseAuthMe = dispatch(authMe());
        let promiseProducts = dispatch(getProducts());

            Promise.all([promiseAuthMe,promiseProducts]).then(()=>{
                dispatch(setInitialized());
            })



}






export default appReducer;