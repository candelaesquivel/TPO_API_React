import { Component, useEffect } from "react";
import ResponsiveAppBar from '../components/Misc/ResponsiveNavBar';
import ResponsiveFooter from "../components/Footer/ResponsiveFooter";
import {ProfileBody} from '../components/Profile/ProfileBody';
import { getUserData, isLogged } from "../utilities/UserSession";
import { useNavigate } from "react-router-dom";

export function Profile(props) {
    const navigate = useNavigate();

    useEffect( () => {
        console.log('PROHIBIDO')

        if (!isLogged())
            navigate('/forbidden-access')
    }, [])

    return (
            <div>
                <ResponsiveAppBar></ResponsiveAppBar>
                <ProfileBody values = {getUserData()}></ProfileBody>
                <ResponsiveFooter></ResponsiveFooter>
            </div>
        )
}

export default Profile;