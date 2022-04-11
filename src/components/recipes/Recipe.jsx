import React, {useEffect} from "react";
import {useParams} from "react-router-dom";

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