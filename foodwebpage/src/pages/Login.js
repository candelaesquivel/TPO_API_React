import { Component } from "react";
import ResponsiveAppBar from "../components/Misc/ResponsiveNavBar";
import ResponsiveFooter from "../components/Footer/ResponsiveFooter";
import {LogInBody} from '../components/Login/LogInBody';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { isLogged } from "../utilities/UserSession";

export function Login(props) {

    const navigate = useNavigate();

    useEffect( () => {
        console.log('PROHIBIDO')

        if (isLogged())
            navigate('/forbidden-access')
    }, [])

    return (
            <div>
                <ResponsiveAppBar></ResponsiveAppBar>
                <LogInBody> </LogInBody>
                <ResponsiveFooter></ResponsiveFooter>
            </div>
        )
}

export default Login;