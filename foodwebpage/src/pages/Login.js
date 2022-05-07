import { Component } from "react";
import ResponsiveAppBar from "../components/Misc/ResponsiveNavBar";
import ResponsiveFooter from "../components/Footer/ResponsiveFooter";
import LogInBody from '../components/Login/LogInBody';

class Login extends Component{
    render(){
        return (
            <div>
                <ResponsiveAppBar></ResponsiveAppBar>
                <LogInBody> </LogInBody>
                <ResponsiveFooter></ResponsiveFooter>
            </div>
        )
    }
}

export default Login;