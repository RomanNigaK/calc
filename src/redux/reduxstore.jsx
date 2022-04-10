import {createStore, combineReducers, applyMiddleware} from "redux";
import productsreduser from "./products-reduce";
import { reducer as formReducer } from 'redux-form';

import thunk from 'redux-thunk'
import reducerRecipes from "./recipes-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    productsreduce:productsreduser,
    recipesReducer:reducerRecipes,
    form: formReducer,
    auth:authReducer

});


let store = createStore(reducers, applyMiddleware(thunk));
export default store;