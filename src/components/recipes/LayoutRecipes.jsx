import React from "react";
import css from "./recipes.module.css"
import {NavLink} from "react-router-dom";
import {Outlet} from "react-router";
const LayoutRecipes=(props)=>{

    let r = props.viewRecipe.split("<br>").map(item=><div>{item}</div>);

    let listTitle = props.title.map((r)=>(<div><NavLink to={`${r.id}`}>{r.title}</NavLink></div>));
    return(
        <div className={css.content}>
            <div className={css.listtitlerecipes}>
                {listTitle}
            </div>
            <div className={css.recipe}>
                <Outlet/>
            </div>
        </div>
    )
};
export default LayoutRecipes;