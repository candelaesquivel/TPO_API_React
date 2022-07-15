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
import {ModifyProfileDataView} from "../pages/ModifyProfileDataView";
import MessagePageView from '../pages/MessagePageView';

class Main extends Component{
    render()
    {
        const LogoutView = () => {
            return <MessagePageView
            closeSession = {true}
            message = 'Se ha cerrado la sesión correctamente, en breve sera redirigido a la página principal'
            url = '/home'>
            </MessagePageView>
        }

        const RecipeCreateSuccesfulView = () => {
            return <MessagePageView
            closeSession = {false}
            message = 'Se ha creado con exito la receta'
            url = '/my-recipes'>
            </MessagePageView>
        }

        const RecipedUpdateSuccesfulView = () => {
            return <MessagePageView
            closeSession = {false}
            message = 'Se ha actualizado con exito los datos de la receta'
            url = '/my-recipes'>
            </MessagePageView>
        }

        const RecipeDeletedSuccesfulView = () => {
            return <MessagePageView
            closeSession = {false}
            message = 'Se ha eliminado correctamente la receta'
            url = '/my-recipes'>
            </MessagePageView>
        }

        const ForbiddenAccessView = () => {
            return <MessagePageView
            closeSession = {false}
            message = 'Acceso no autorizado a usuarios no registrados'
            url = '/home'>
            </MessagePageView>
        }

        const UpdatedPasswordView = () => {
            return <MessagePageView
            closeSession = {false}
            message = 'Contraseña actualizada correctamente'
            url = '/profile'>
            </MessagePageView>
        }

        const UpdatePasswordFromRecoveryView = () => {
            return <MessagePageView
            closeSession = {false}
            message = 'Contraseña actualizada correctamente'
            url = '/login'>
            </MessagePageView>
        }

        const UpdateUserFieldSuccesfulView = () => {
            return <MessagePageView
            closeSession = {false}
            message = 'Modificacion de datos realizada correctamente'
            url = '/profile'>
            </MessagePageView>
        }

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
                    <Route path= 'create-recipe' element={<RecipeCreatePage></RecipeCreatePage>}></Route>
                    <Route path= 'ResetPassword' element={<ResetPassword></ResetPassword>}></Route>
                    <Route path= 'modify-password' element={<ChangePassword></ChangePassword>}></Route>
                    <Route path= 'modify-name' element={<ModifyProfileDataView title={'Cambiar Nombre'} inputLabel={'Nombre'} />}></Route>
                    <Route path= 'modify-last-name' element={<ModifyProfileDataView title={'Cambiar Apellido'} inputLabel={'Apellido'} />}></Route>
                    <Route path= 'modify-phone' element={<ModifyProfileDataView title={'Cambiar Teléfono'} inputLabel={'Teléfono'} />}></Route>
                    <Route path= 'logout' element={<LogoutView></LogoutView>}></Route>
                    
                    {/**Pagina de Mensajes */}
                    <Route path= 'user-data-modified' element={<UpdateUserFieldSuccesfulView/>}></Route>
                    <Route path= 'recipe-created' element={<RecipeCreateSuccesfulView/>}></Route>
                    <Route path= 'recipe-modified' element={<RecipedUpdateSuccesfulView/>}></Route>
                    <Route path= 'recipe-deleted' element={<RecipeDeletedSuccesfulView/>}></Route>
                    <Route path= 'forbidden-access' element={<ForbiddenAccessView/>}></Route>
                    <Route path= 'password-updated' element={<UpdatedPasswordView/>}></Route>
                    <Route path= 'password-recovered' element={<UpdatePasswordFromRecoveryView/>}></Route>
                    <Route path='*' element={<Home />} />
                </Routes>
            </div>
        )
    }
}

export default Main;