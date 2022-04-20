import React from "react";
import {connect} from "react-redux";
import HomePage from "./Homepage";
import {getPostsState,getIsAuth,getMyLikePosts} from "../../redux/selectors";

let mapStateToProps=(state)=>{

    return{
       posts:getPostsState(state),
       isAuth:getIsAuth(state),
       myLike:getMyLikePosts(state)
    }

};

const HomePageContainer = connect(mapStateToProps,null)(HomePage);
export default HomePageContainer;
