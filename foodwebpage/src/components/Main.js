import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Recipes from "../pages/Recipes";
import RegisterPage from "../pages/Register";
import ContactPage from "../pages/Contact"

class Main extends Component{
    render()
    {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Home></Home>} />
                    <Route path="/home" element={<Home></Home>}></Route>
                    <Route path='/recipes' element={<Recipes></Recipes>}></Route>
                    <Route path='/login' element={<Login></Login>}></Route>
                    <Route path='profile' element={<Profile></Profile>}></Route>
                    <Route path='Register' element={<RegisterPage></RegisterPage>}></Route>
                    <Route path='Contacto' element={<ContactPage></ContactPage>}></Route>
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>
        )
    }
}

export default Main;