import { Component } from "react";
import ResponsiveFooter from "../components/Footer/ResponsiveFooter";
import ResponsiveAppBar from "../components/Misc/ResponsiveNavBar";
import ProfileRecipesBody from "../components/Profile/ProfileRecipesBody";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { isLogged } from "../utilities/UserSession";

export function ProfileRecipesPage(props){

    const navigate = useNavigate();

    useEffect( () => {
        console.log('PROHIBIDO')

        if (!isLogged())
            navigate('/forbidden-access')
    }, [])

    return (
            <>
                <ResponsiveAppBar></ResponsiveAppBar>
                <ProfileRecipesBody></ProfileRecipesBody>
                <ResponsiveFooter></ResponsiveFooter>
            </>
        )
}


export default ProfileRecipesPage;