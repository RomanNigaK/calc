import React from "react";
import css from "./calc.module.css";

const Find = (props) => {

    let nullFind = () => {
        props.setNullFind();
    };
    let setStrSearch = (e) => {
        props.setSearch(e.target.value, e.target.value.length);

    };


    let list = props.products.findItems.map(
        (item) => (<div>
            {props.chekProductItem(item,"all")}
        </div>));


    return (<>
            <div className={css.inputfind} style={{backgroundImage: "url(/assetc/find.jpg)"}}>
                <input type="text" placeholder="Поиск..." onChange={setStrSearch}
                       value={props.value}/>
            </div>
            <div >

                {list}


            </div>
        </>
    )
}

export default Find;