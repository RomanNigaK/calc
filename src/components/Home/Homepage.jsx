import React from "react";
import style from "./Homepage.module.css"
import like from "./../../svg/like.svg"

const HomePage = ({posts}) => {
    function delete_cookie ( cookie_name )
    {
        var cookie_date = new Date ( );  // Текущая дата и время
        cookie_date.setTime ( cookie_date.getTime() - 1 );
        document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
    }

let delcook=()=>{
        delete_cookie ( "user" );
    }

    let listPost = posts.map(p => (<div  key={p.id+"cont"} className={style.post}>
            <img src={p.img} alt={p.post}/>
        <div key={p.id+"data"} className={style.likeText}>
            <div key={p.id+"post"} className={style.text}>{p.post}</div><div key={p.id+"like"} className={style.like}> <img src={like} alt=""/></div></div>
    </div>))
    return (
        <div className={style.content}>
            <div onClick={delcook}>delete</div>
            {listPost}
        </div>

    )
};
export default HomePage;