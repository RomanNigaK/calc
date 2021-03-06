import React from "react";
import style from "./Homepage.module.css";
import like from "./../../svg/like.svg";
import host from './../../utils/host.js'

import likeBlack from "./../../svg/likeBlack.svg"

const HomePage = ({posts,isAuth,myLike, ...props}) => {


   let clickLike=(obj)=>{
        console.log(obj);
        props.setLikeList(obj);
    };

    let itNoAuth = ()=>{
        alert("Для лайка нужно авторизоваться");
    }


    let listPost = posts.map(p => (<div  key={p.id+"cont"} className={style.post}>
                <img src={host+p.imgPost} alt={host+p.imgPost}/>
                <div key={p.id+"data"} className={style.likeText}>
                    <div key={p.id+"post"} className={style.text}>

                        {p.textPost}
                    </div>
                    <div key={p.id+"likeCount"} className={style.countLike}>{p.countLike}</div>
                    <div key={p.id+"like"} className={style.like}>


                        {!isAuth?
                            <img onClick={itNoAuth} src={likeBlack} alt=""/>:

                             
                            <img onClick={()=>
                                clickLike(!myLike.like.includes(p.id)?
                                    {action : "like",idPost:p.id}:
                                    {action : "disLike",idPost:p.id}
                                    )} src={myLike.like.includes(p.id)?like:likeBlack} alt=""/>
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
