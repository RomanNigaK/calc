import {getIsAuth, getUserData} from "../../redux/selectors";
import MyProfile from "./myProfile";
import {connect} from "react-redux";


let mapStateToProps=(state)=>{
    return{
        isAuth:getIsAuth(state),
        user: getUserData(state)[0],
        sex: state.auth.sex,
      }
}
const MyProfileContainer = connect(mapStateToProps,null)(MyProfile);
export default MyProfileContainer;
