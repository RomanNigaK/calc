import React from "react";
import {connect} from "react-redux";
import {setActivRecipe} from "../../redux/recipes-reducer";
import LayoutRecipes from "./LayoutRecipes";


let mapStateToProps=(state)=>{

    return{
        title:state.recipesReducer.recipesTitle,
        viewRecipe:state.recipesReducer.viewRecipe
    }
};

let LayoutRecipesContainer = connect(mapStateToProps,null)(LayoutRecipes);
export default LayoutRecipesContainer;