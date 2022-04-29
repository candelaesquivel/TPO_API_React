import { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import RegisterPage from "../pages/Register";
import ContactPage from "../pages/Contact"
import ProfileRecipesPage from "../pages/ProfileRecipes";
import RecipeViewPage from "../pages/RecipeView";
import RecipeEditPage from "../pages/RecipeEdit";

class Main extends Component{
    render()
    {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Home></Home>} />
                    <Route path="home" element={<Home></Home>}></Route>
                    <Route path='login' element={<Login></Login>}></Route>
                    <Route path='profile' element={<Profile></Profile>}></Route>
                    <Route path='register' element={<RegisterPage></RegisterPage>}></Route>
                    <Route path='contact-us' element={<ContactPage></ContactPage>}></Route>
                    <Route path='view-recipe' element={<RecipeViewPage></RecipeViewPage>}></Route>
                    <Route path='my-recipes' element={<ProfileRecipesPage></ProfileRecipesPage>}></Route>
                    <Route path='edit-recipe' element={<RecipeEditPage></RecipeEditPage>}></Route>
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>
        )
    }
}

export default Main;