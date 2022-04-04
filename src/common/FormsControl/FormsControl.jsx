import React from "react";
import css from "./FormsControl.module.css"

export const Input=({input,meta, ...props})=>{

    const uslovie =  meta.touched&&meta.error;
    return(

        <div className={css.formControl+" "+(uslovie?css.error:"")}>

        <div> <input {...input}{...props}/></div>
        <div>{uslovie&&<span>{meta.error}</span>}</div>
        </div>
    )
}