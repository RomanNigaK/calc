import React from "react";
import css from "./recipes.module.css"
import {setActivRecipe} from "../../redux/recipes-reducer";
import {productsAPI} from "../../api/api";
const Recipes = (props) => {
    console.log(props);
    let viewRecipe=(e)=>{
      props.setActivRecipe(e.target.id);
   };

    let r = props.viewRecipe.split("<br>").map(item=><div>{item}</div>)
    let listTitle = props.title.map((r)=>(<div id={r.id} onClick={viewRecipe}>{r.title}</div>));
    return (
        <>
            <div className={css.content}>
                <div className={css.listtitlerecipes}>
                    <h2>Рецепты</h2>
                    {listTitle}
                </div>
                <div className={css.recipe}>
                    {r}
                </div>
            </div>
        </>
    )
};

export default Recipes;
