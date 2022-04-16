import { Component } from "react";
import NavBarHeader from "../components/NavBar";
import Footer from "../components/Footer";

class Login extends Component{
    render(){
        return (
            <div>
                <NavBarHeader></NavBarHeader>
                <p>Login</p>
                <Footer></Footer>
            </div>
        )
    }
}

export default Login;