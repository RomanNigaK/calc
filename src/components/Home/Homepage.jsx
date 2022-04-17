import React from "react";
import style from "./Homepage.module.css"
import like from "./../../svg/like.svg"

const HomePage = ({posts}) => {


    let listPost = posts.map(p => (<div  key={p.id+"cont"} className={style.post}>
            <img src={p.img} alt={p.post}/>
        <div key={p.id+"data"} className={style.likeText}>
            <div key={p.id+"post"} className={style.text}>{p.post}</div><div key={p.id+"like"} className={style.like}> <img src={like} alt=""/></div></div>
    </div>))
    return (
        <div className={style.content}>
            {listPost}
        </div>

    )
};
export default HomePage;