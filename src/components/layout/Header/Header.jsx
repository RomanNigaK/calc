import React from "react";
import css from "../layout.module.css";

const Header =()=>{
    return(
        <div>
            <div className={css.divlogo}>
                <img className={css.imglogo} src="/assetc/logo.png" alt="hjh"/>
                <div className={css.headername}> Сладкий калькулятор</div>
            </div>
            <div className={css.avatar}><img src="/assetc/userno.png" alt="hjh"/></div>
        </div>
    )
};
export default Header;