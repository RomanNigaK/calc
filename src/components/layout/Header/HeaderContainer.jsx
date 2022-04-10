import React from "react";
import Header from "./Header";
import {setUser} from "../../../redux/auth-reducer";
import {connect} from "react-redux";
class HeaderContainer extends React.Component{
    componentDidMount=()=>{
       this.props.setUser();

    };
    newAjax=()=>{
        alert( document.cookie )
        console.log(document.cookie);
       this.props.setUser();
    }
    render() {
        return (
            <div><div onClick={this.newAjax}>2121</div><Header/></div>
        );
    }
}

const mapStateToProps=(state)=>{
return{
    ddd:"ffff"
}
};


export default connect (mapStateToProps,{setUser})(HeaderContainer);