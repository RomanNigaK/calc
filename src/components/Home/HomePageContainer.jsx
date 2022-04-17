import {connect} from "react-redux";
import HomePage from "./Homepage";
import {getPosts} from "../../redux/selectors";

let mapStateToProps=(state)=>{
    return{
       posts:getPosts(state)
    }

};

const HomePageContainer = connect(mapStateToProps,null)(HomePage);
export default HomePageContainer;