import {getIsAuth} from "../../redux/selectors";
import MyProfile from "./myProfile";
import {connect} from "react-redux";


let mapStateToProps=(state)=>{
    return{
        isAuth:getIsAuth(state)
      }
}
const MyProfileContainer = connect(mapStateToProps,null)(MyProfile);
export default MyProfileContainer;