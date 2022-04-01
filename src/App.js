import HomePage from "./components/Home/Homepage";
import { Route, Routes} from "react-router";
import React from "react";
import Layout from "./components/layout/Layout";
import CalcContainer from "./components/calc/CalcContainer";
import RecipesContainer from "./components/recipes/RecipesContainer";

function App() {
    return (
        <>


                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route index element={<HomePage/>}/>
                            <Route path="calc" element={<CalcContainer/>}/>
                            <Route path="recipes" element={<RecipesContainer/>}/>
                            <Route path="*" element={<HomePage/>}/>

                        </Route>

                    </Routes>
</>

    );
}

export default App;
