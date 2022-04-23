import React from "react";
import css from "./layout.module.css"
import {Outlet} from "react-router";
import {NavLink} from "react-router-dom";
import HeaderContainer from "./Header/HeaderContainer";
console.log("initial App");

const Layout = ()=>{

    return(
        <div className={css.container}>
          <div className={css.header}>
            <HeaderContainer/>
          </div>
          <nav className={css.nav}>
            <NavLink className={({isActive}) =>isActive ? css.link: css.notactivelink} to="/">Главная</NavLink>
            <NavLink className={({isActive}) =>isActive ? css.link : css.notactivelink} to="/Calc">Калькулятор</NavLink>
            <NavLink className={({isActive}) =>isActive ? css.link: css.notactivelink} to="/recipes">Рецепты</NavLink>
            <NavLink className={({isActive}) =>isActive ? css.link : css.notactivelink} to="/costs">База цен</NavLink>

          </nav>
          <div className={css.content}>
            <Outlet/>
          </div>
        </div>
    )
};
export default Layout;
