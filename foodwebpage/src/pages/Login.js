import { Component } from "react";
import ResponsiveAppBar from "../components/ResponsiveNavBar";
import ResponsiveFooter from "../components/ResponsiveFooter";
import LogInBody from "../components/LogInBody";
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