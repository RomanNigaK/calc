import React from "react";
import Header from "./Header";
import {setUser} from "../../../redux/auth-reducer";
import {connect} from "react-redux";
import {getIsAuth, getUserData} from "../../../redux/selectors";
class HeaderContainer extends React.Component{
    componentDidMount=()=>{
       //this.props.setUser();

    };
    newAjax=()=>{
        alert( document.cookie )
        console.log(document.cookie);
      // this.props.setUser();
    }
    render() {
        return (
            <div><div onClick={this.newAjax}>2121</div><Header isAuth={this.props.isAuth} user={this.props.user} /></div>
        );
    }
}

const mapStateToProps=(state)=>{
return{
    isAuth:getIsAuth(state),
    user:getUserData(state)
}
};


export default connect (mapStateToProps,{setUser})(Header);