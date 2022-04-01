import {createStore, combineReducers, applyMiddleware} from "redux";
import productsreduser from "./products-reduce";

import thunk from 'redux-thunk'
import reducerRecipes from "./recipes-reducer";

let reducers = combineReducers({
    productsreduce:productsreduser,
    recipesReducer:reducerRecipes

});


let store = createStore(reducers, /*applyMiddleware(thunk)*/);
export default store;