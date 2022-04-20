import React from "react";
import { connect } from "react-redux";
import HomePage from "./Homepage";
import { getPosts } from "../../redux/selectors";

const mapStateToProps = (state) => {
    return {
       posts: state.home.posts,
    }

};

const HomePageContainer = connect(mapStateToProps,null)(HomePage);

export default HomePageContainer;
