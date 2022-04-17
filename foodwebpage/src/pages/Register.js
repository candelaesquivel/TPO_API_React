import { Component } from "react";
import RegisterFormBody from "../components/RegisterFormBody";
import ResponsiveFooter from "../components/ResponsiveFooter";
import ResponsiveAppBar from "../components/ResponsiveNavBar";

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