import HomePage from "./components/Home/Homepage";
import {Route, Routes} from "react-router";
import React from "react";
import Layout from "./components/layout/Layout";
import CalcContainer from "./components/calc/CalcContainer";
import LayoutAdmin from "./components/admin/layoutadmin/AdminLayout";
import ProductsContainer from "./components/admin/products/ProductsContainer";
import NewProductContainer from "./components/admin/NewProduct/NewProductContainer";
import Costs from "./components/Costs/Costs";
import LayoutRecipesContainer from "./components/recipes/LayoutRecipesContainer";
import FirstRecipe from "./components/recipes/FirstRecipe";
import RecipeContainer from "./components/recipes/RecipeContainer";
import LoginPageContainer from "./components/login/LoginPageContainer";
import MyProfileContainer from "./components/Profile/MyProfileContainer";

import ProfileCredentials from "./components/Profile/ProfileCredentials";
import ProfileMyCosts from "./components/Profile/ProfileMyCosts";
import {authAPI} from "./api/api";
import {connect} from "react-redux";
import {initializedApp} from "./redux/app-reducer";
import PreloaderApp from "./common/preloader/PreloaderApp";
import HomePageContainer from "./components/Home/HomePageContainer";

class App extends React.Component {

    componentDidMount() {
        this.props.initializedApp();

    }


    render() {
        if (!this.props.initialized) {
            return (
                <PreloaderApp/>
            )
        }

        return (
            <>
              <Routes>
                <Route path="/" element={<Layout/>}>
                  <Route index element={<HomePageContainer/>}/>
                  <Route path="calc" element={<CalcContainer/>}/>
                  <Route path="login" element={<LoginPageContainer/>}/>
                  <Route path="profile" element={<MyProfileContainer/>}>
                    <Route index element={<ProfileCredentials />}/>
                    <Route path="mycosts" element={<ProfileMyCosts/>}/>
                  </Route>
                  <Route path="recipes/" element={<LayoutRecipesContainer/>}>
                    <Route index element={<FirstRecipe/>}/>
                    <Route path=":id" element={<RecipeContainer/>}/>
                  </Route>
                  <Route path="costs" element={<Costs/>}/>
                  <Route path="*" element={<HomePage/>}/>
                </Route>
                <Route path="/admin/" element={<LayoutAdmin/>}>
                  <Route index element={<ProductsContainer/>}/>
                  <Route path="products" element={<ProductsContainer/>}/>
                  <Route path="newproduct" element={<NewProductContainer/>}/>
                  <Route path="*" element={<ProductsContainer/>}/>
                </Route>
              </Routes>
            </>
        )
    }
}

let mapStateToProps=(state)=>{
    return{
        initialized:state.app.initialized
    }
}


const AppContainer = connect(mapStateToProps,{initializedApp})(App);
export default AppContainer;
