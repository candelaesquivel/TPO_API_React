import { Component } from "react";
import ResponsiveFooter from "../components/Footer/ResponsiveFooter";
import ResponsiveAppBar from "../components/Misc/ResponsiveNavBar";
import ChangePasswordBody from '../components/Profile/ChangePasswordBody';

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