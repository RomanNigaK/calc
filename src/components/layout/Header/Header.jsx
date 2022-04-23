import React from "react";
import css from "../layout.module.css";
import {NavLink} from "react-router-dom";
import boy from "./../../../svg/boy.svg";
import girl from "./../../../svg/girl.svg";

const Header =(props)=>{

let exitUser=()=>{

    props.exitApp();
}

if(props.isAuth){
    return (
        <>
          <div className={css.divlogo}>
            <img className={css.imglogo} src="/assetc/logo.png" alt="hjh"/>
            <span className={css.headername}> Сладкий калькулятор</span>
          </div>
          <div className={css.avatar__box}>
            <div className={css.dataUser}>
              <div className={css.info}>{props.user[0].name}</div>
              <div className={css.logout} onClick={exitUser}>Выход</div>
            </div>
            <NavLink to = "/profile"><img className={css.avatar} src={props.user[0].sex=="man"?boy:girl} alt="hjh"/></NavLink>
          </div>
        </>
    )
}
    return(
        <>
          <div className={css.divlogo}>
            <img className={css.imglogo} src="/assetc/logo.png" alt="hjh"/>
            <div className={css.headername}> Сладкий калькулятор</div>
          </div>
          <div className={css.avatar}><NavLink to = "/login"><img src="/assetc/userno.png" alt="hjh"/></NavLink></div>
        </>
    )
};
export default Header;
