import { Component } from "react";

import ResponsiveAppBar from "../components/Misc/ResponsiveNavBar";
import ResponsiveFooter from "../components/Footer/ResponsiveFooter";
import ResetPasswordBody from '../components/RecoverPassword/ResetPasswordBody';

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