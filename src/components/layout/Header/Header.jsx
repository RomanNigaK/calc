import React from "react";
import css from "../layout.module.css";
import {NavLink} from "react-router-dom";
import boy from "./../../../svg/boy.svg";
import girl from "./../../../svg/girl.svg";

const Header =(props)=>{

if(props.isAuth){
    return (
        <div>

            <div className={css.divlogo}>
                <img className={css.imglogo} src="/assetc/logo.png" alt="hjh"/>
                <div className={css.headername}> Сладкий калькулятор</div>
            </div>
            <div className={css.avatar}>
                <div className={css.dataUser}>
                    <div>{props.user[0].name}</div>
                    <div>Выход</div>
                </div>
                <NavLink to = "/profile"><img src={props.user[0].sex=="man"?boy:girl} alt="hjh"/></NavLink>
            </div>
        </div>
    )
}
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