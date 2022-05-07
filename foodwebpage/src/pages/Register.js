import { Component } from "react";

import RegisterFormBody from '../components/Register/RegisterFormBody';
import ResponsiveAppBar from "../components/Misc/ResponsiveNavBar";
import ResponsiveFooter from "../components/Footer/ResponsiveFooter";

class RegisterPage extends Component{
    render(){
        return (
            <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <RegisterFormBody></RegisterFormBody>
            <ResponsiveFooter></ResponsiveFooter>
            </>
            )
    }
}

export default RegisterPage;