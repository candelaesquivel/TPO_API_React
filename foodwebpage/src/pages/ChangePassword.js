import { Component } from "react";
import ResponsiveFooter from "../components/Footer/ResponsiveFooter";
import ResponsiveAppBar from "../components/Misc/ResponsiveNavBar";
import {ChangePasswordBody} from '../components/Profile/ChangePasswordBody';

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isLogged } from "../utilities/UserSession";

export function ChangePassword(props){
    
    const navigate = useNavigate();

    useEffect( () => {

        if (!isLogged())
        {
            console.log('PROHIBIDO')
            navigate('/forbidden-access')
        }

    }, [])

    return (
    <>
        <ResponsiveAppBar></ResponsiveAppBar>
        <ChangePasswordBody> </ChangePasswordBody>
        <ResponsiveFooter></ResponsiveFooter>
    </>
    )
}

export default ChangePassword;