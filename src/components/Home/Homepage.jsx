import React from "react";
import style from "./Homepage.module.css"
import like from "./../../svg/like.svg"
import { useSelector } from "react-redux";

const HomePage = ({ posts }) => {

    const listPost = posts.map(post =>
        <div className={style.post}>
          <img src={post.img} alt={post.post}/>
          <div className={style.likeText}>
            <div className={style.text}>{post.post}</div>
            <div className={style.like}>
              <img src={like} alt=""/>
            </div>
          </div>
        </div>
    );

    return (
        <div className={style.content}>
          { listPost }
        </div>

    )
};
export default HomePage;
