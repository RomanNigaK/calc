import React from "react";
import style from "./Homepage.module.css";
import like from "./../../svg/like.svg";

import likeBlack from "./../../svg/likeBlack.svg"

const HomePage = ({posts,isAuth,myLike, ...props}) => {


   let clickLike=()=>{

        alert("Вы нажали Like");
    };

    let itNoAuth = ()=>{
        alert("Для лайка нужно авторизоваться");
    }


    let listPost = posts.map(p => (<div  key={p.id+"cont"} className={style.post}>
                <img src={p.imgPost} alt={p.textPost}/>
                <div key={p.id+"data"} className={style.likeText}>
                    <div key={p.id+"post"} className={style.text}>

                        {p.textPost}
                    </div>
                    <div key={p.id+"likeCount"} className={style.countLike}>{p.countLike}</div>
                    <div key={p.id+"like"} className={style.like}>


                        {!isAuth?
                            <img onClick={itNoAuth} src={likeBlack} alt=""/>:

                            <img onClick={clickLike} src={myLike.like.includes(p.id)?like:likeBlack} alt=""/>

                        }


                    </div>
                </div>
            </div>))

    return (
        <div className={style.content}>

            {listPost}
        </div>

    )
};

export default HomePage;
