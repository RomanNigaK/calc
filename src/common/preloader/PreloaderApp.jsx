import React from "react";
import style from "./preloader.module.css"
const PreloaderApp =()=>{
    return(
        <div className={style.box}>

            <div>
                <img src="assetc/preloader.gif" alt=""/><br/>

                <h4>Загрузка приложения</h4>
            </div>

        </div>
    )
}
export default PreloaderApp;