import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {setActivRecipe} from "../../redux/recipes-reducer";

const Recipe=(props)=>{
const {id}=useParams();

    useEffect(() => {

        props.setActivRecipe({id});

    });
    let r = props.viewRecipe.split("<br>").map(item=><div>{item}</div>)
    return(
        <div>Рецепт под номером {id}
            {r}
        </div>
    )
};
export default Recipe;