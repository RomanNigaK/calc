import React from "react";
import Recipes from "./Recipes";
import {connect} from "react-redux";
import {setActivRecipe} from "../../redux/recipes-reducer";


let mapStateToProps=(state)=>{

    return{
        title:state.recipesReducer.recipesTitle,
        viewRecipe:state.recipesReducer.viewRecipe
    }
};

let RecipesContainer = connect(mapStateToProps,{setActivRecipe})(Recipes);
export default RecipesContainer;