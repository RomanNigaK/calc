import React from "react";
import css from "./FormsControl.module.css"


export const Input = ({input, meta, ...props}) => {

    const uslovie = meta.touched && meta.error;
    return (

        <div className={css.formControl + " " + (uslovie ? css.error : "")}>

            <div><input {...input}{...props}/></div>
            <div>{uslovie && <span>{meta.error}</span>}</div>
        </div>
    )
};

export const Input2 = ({input, meta, ...props}) => {

    const uslovie = meta.touched && meta.error;
    return (
        <div>
            <div className={css.divInput}>

               { <input {...input}{...props} />}
            </div>
            <div className={css.parentDivError} >
                {uslovie &&<div className={css.divError} style={{backgroundImage: "url(/assetc/danger.svg)"}}>{meta.error}</div>}

            </div>
        </div>
    )
};
export const InputSex = ({input, meta, ...props}) => {

    return (
        <div style={{display:'none'}}>


               { <input {...input}{...props} value={props.sex} />}

        </div>
    )
};