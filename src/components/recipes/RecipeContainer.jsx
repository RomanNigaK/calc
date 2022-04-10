import React from "react";
import Recipes from "./Recipes";
import {connect} from "react-redux";
import {setActivRecipe} from "../../redux/recipes-reducer";
import Recipe from "./Recipe";
import {useParams} from "react-router-dom";



let mapStateToProps=(state)=>{

    return{
        title:state.recipesReducer.recipesTitle,
        viewRecipe:state.recipesReducer.viewRecipe
    }
};

let RecipeContainer = connect(mapStateToProps,{setActivRecipe})(Recipe);
export default RecipeContainer;