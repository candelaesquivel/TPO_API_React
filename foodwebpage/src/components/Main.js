import { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import RegisterPage from "../pages/Register";
import AboutUsPage from "../pages/AboutUs"
import ProfileRecipesPage from "../pages/ProfileRecipes";
import RecipeViewPage from "../pages/RecipeView";
import {RecipeEditPage} from "../pages/RecipeEdit";
import ResetPassword from "../pages/ResetPassword";
import ChangePassword from "../pages/ChangePassword";
import RecipeCreatePage from '../pages/RecipeCreate';
import {ResetDataView} from "../pages/ResetDataView";
import LogoutView from '../pages/LogoutView';

class Main extends Component{
    render()
    {
        return (
            <div>
                <Routes>
                    <Route path='/' element={<Home></Home>} />
                    <Route path='home' element={<Home></Home>}></Route>
                    <Route path='login' element={<Login></Login>}></Route>
                    <Route path='profile' element={<Profile></Profile>}></Route>
                    <Route path='register' element={<RegisterPage></RegisterPage>}></Route>
                    <Route path='about-us' element={<AboutUsPage></AboutUsPage>}></Route>
                    <Route path='view-recipe/:id' element={<RecipeViewPage></RecipeViewPage>}></Route>
                    <Route path='my-recipes' element={<ProfileRecipesPage></ProfileRecipesPage>}></Route>
                    <Route path='edit-recipe/:id' element={<RecipeEditPage></RecipeEditPage>}></Route>
                    <Route path='create-recipe' element={<RecipeCreatePage></RecipeCreatePage>}></Route>
                    <Route path= 'ResetPassword' element={<ResetPassword></ResetPassword>}></Route>
                    <Route path= 'modify-password' element={<ChangePassword></ChangePassword>}></Route>
                    <Route path= 'modify-name' element={<ResetDataView title={'Cambiar Nombre'} inputLabel={'Nombre'} />}></Route>
                    <Route path= 'modify-last-name' element={<ResetDataView title={'Cambiar Apellido'} inputLabel={'Apellido'} />}></Route>
                    <Route path= 'modify-phone' element={<ResetDataView title={'Cambiar Teléfono'} inputLabel={'Teléfono'} />}></Route>
                    <Route path= 'logout' element={<LogoutView></LogoutView>}></Route>
                    <Route path='*' element={<Home />} />
                </Routes>
            </div>
        )
    }
}

export default Main;