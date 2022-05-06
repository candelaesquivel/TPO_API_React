import { Component } from "react";
import ResponsiveFooter from "../components/ResponsiveFooter";
import ResponsiveAppBar from "../components/ResponsiveNavBar";
import ResetPasswordBody from "../components/ResetPasswordBody"


class ResetPassword extends Component{
    
    render(){
        return (
        <>
        <ResponsiveAppBar></ResponsiveAppBar>
        <ResetPasswordBody> </ResetPasswordBody>
        <ResponsiveFooter></ResponsiveFooter>
        </>
        )
    }
}

export default ResetPassword;