import React from "react";
import css from "./layout.module.css"
import {Outlet} from "react-router";
import {NavLink} from "react-router-dom";


const Layout = ()=>{
    return(
        <div className={css.container}>
            <div className={css.header}>
                <img className={css.imglogo} src="assetc/logo.png" alt="hjh"/>
                <div className={css.headername}> Сладкий калькулятор</div>

            </div>
            <div className={css.linkhome}>
                <NavLink className={({isActive}) =>isActive ? css.linkcalc : css.notactivelink} to="/">ГЛАВНАЯ</NavLink>
            </div>
            <div className={css.linkcalc}>
                <NavLink  className={({isActive}) =>isActive ? css.linkcalc : css.notactivelink} to="/Calc">КАЛЬКУЛЯТОР</NavLink>
            </div>
            <div className={css.linkrecipes}>
                <NavLink   className={({isActive}) =>isActive ? css.linkcalc : css.notactivelink} to="/recipes">РЕЦЕПТЫ</NavLink>
            </div>
            <div className={css.content}>
                <Outlet/>
            </div>

        </div>
    )
};
export default Layout;