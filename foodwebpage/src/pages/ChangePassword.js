import { Component } from "react";
import ResponsiveFooter from "../components/ResponsiveFooter";
import ResponsiveAppBar from "../components/ResponsiveNavBar";
import ChangePasswordBody from "../components/ChangePasswordBody"


class ChangePassword extends Component{
    
    render(){
        return (
        <>
        <ResponsiveAppBar></ResponsiveAppBar>
        <ChangePasswordBody> </ChangePasswordBody>
        <ResponsiveFooter></ResponsiveFooter>
        </>
        )
    }
}

export default ChangePassword;