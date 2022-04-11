import React from "react";
import css from "../layout.module.css";
import {NavLink} from "react-router-dom";

const Header =()=>{
    return(
        <div>
            <div className={css.divlogo}>
                <img className={css.imglogo} src="/assetc/logo.png" alt="hjh"/>
                <div className={css.headername}> Сладкий калькулятор</div>
            </div>
            <div className={css.avatar}><NavLink to = "/login"><img src="/assetc/userno.png" alt="hjh"/></NavLink></div>
        </div>
    )
};
export default Header;