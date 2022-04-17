import React from "react";
import style from "./Homepage.module.css"
import like from "./../../svg/like.svg"

const HomePage = ({posts}) => {
    let listPost = posts.map(p => (<div className={style.post}>
            <img src={p.img} alt={p.post}/>
        <div className={style.likeText}>
            <div className={style.text}>{p.post}</div><div className={style.like}> <img src={like} alt=""/></div></div>
    </div>))
    return (
        <div className={style.content}>
            {listPost}
        </div>

    )
};
export default HomePage;