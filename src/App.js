import HomePage from "./components/Home/Homepage";
import {Navigate, Route, Routes} from "react-router";
import React from "react";
import Layout from "./components/layout/Layout";
import CalcContainer from "./components/calc/CalcContainer";
import RecipesContainer from "./components/recipes/RecipesContainer";
import LayoutAdmin from "./components/admin/layoutadmin/AdminLayout";
import Products from "./components/admin/products/Products";
import NewProduct from "./components/admin/NewProduct/NewProduct";
import ProductsContainer from "./components/admin/products/ProductsContainer";
import NewProductContainer from "./components/admin/NewProduct/NewProductContainer";
import Costs from "./components/Costs/Costs";
import Recipe from "./components/recipes/Recipe";
import LayoutRecipes from "./components/recipes/LayoutRecipes";
import LayoutRecipesContainer from "./components/recipes/LayoutRecipesContainer";
import FirstRecipe from "./components/recipes/FirstRecipe";
import RecipeContainer from "./components/recipes/RecipeContainer";
import LoginPage from "./components/login/LoginPage";
import LoginPageContainer from "./components/login/LoginPageContainer";
import MyProfile from "./components/Profile/myProfile";
import MyProfileContainer from "./components/Profile/MyProfileContainer";

function App(props) {

    return (
        <>

            <Routes>

                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="calc" element={<CalcContainer/>}/>
                    <Route path="login" element={<LoginPageContainer/>}/>
                    <Route path="profile" element={<MyProfileContainer/>}/>
                    {/*<Route path="login" element={
                        props.isAuth ? (
                            <Navigate replace to="/" />
                        ) : (
                            <LoginPageContainer />
                        )
                    }/>*/}

                    <Route path="recipes/" element={<LayoutRecipesContainer/>}>
                        <Route index element={<FirstRecipe/>}/>
                        <Route path=":id" element={<RecipeContainer/>}/>
                    </Route>

                    <Route path="costs" element={<Costs />}/>
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

export default App;
