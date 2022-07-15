
import {RegisterFormBody} from '../components/Register/RegisterFormBody';
import ResponsiveAppBar from "../components/Misc/ResponsiveNavBar";
import ResponsiveFooter from "../components/Footer/ResponsiveFooter";

import { isLogged } from "../utilities/UserSession";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function RegisterPage(props){

    const navigate = useNavigate();

    useEffect( () => {
        console.log('PROHIBIDO')

        if (isLogged())
            navigate('/forbidden-access')
    }, [])

    
    return (
        <>
        <ResponsiveAppBar></ResponsiveAppBar>
        <RegisterFormBody></RegisterFormBody>
        <ResponsiveFooter></ResponsiveFooter>
        </>
    )
}

export default RegisterPage;