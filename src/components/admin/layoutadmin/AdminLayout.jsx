import React from "react";
import {NavLink} from "react-router-dom";
import css from "./Adminlayout.module.css"
import {Outlet} from "react-router";


const LayoutAdmin = () => {
    return (
        <div className={css.content}>


            <div className={css.menuadmin}>
                <div className={css.itemsmenu}>
                    <div className={css.headeritemmenu}>Продукты</div>
                    <div className={css.itemmenu}><NavLink to={"products"}>Список</NavLink></div>
                    <div className={css.itemmenu}><NavLink to={"newproduct"}>Добавить</NavLink></div>
                </div>

            </div>
            <div className={css.dataadmin}>
                <Outlet/>
            </div>
        </div>
    )
};
export default LayoutAdmin;