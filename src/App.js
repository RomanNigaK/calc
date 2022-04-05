import HomePage from "./components/Home/Homepage";
import {Route, Routes} from "react-router";
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

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="calc" element={<CalcContainer/>}/>
                    <Route path="recipes" element={<RecipesContainer/>}/>
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
