import {connect} from "react-redux";
import HomePage from "./Homepage";
import {getPostsState,getIsAuth,getMyLikePosts,getUserData} from "../../redux/selectors";
import {setLikeList} from "./../../redux/auth-reducer.jsx"

let mapStateToProps=(state)=>{

    return{
       posts:getPostsState(state),
       isAuth:getIsAuth(state),
       myLike:getMyLikePosts(state),
       user:getUserData(state)
    }

};

const HomePageContainer = connect(mapStateToProps,{setLikeList})(HomePage);
export default HomePageContainer;
