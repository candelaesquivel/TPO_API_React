
import ResponsiveFooter from "../components/Footer/ResponsiveFooter";
import { LogoutBody } from "../components/Logout/LogoutBody";
import ResponsiveAppBar from "../components/Misc/ResponsiveNavBar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isLogged, setLogged } from '../utilities/UserSession'

export default function LogoutView(props){
    
    setLogged(false);

    const navigate = useNavigate();

    useEffect( () => {

        if (!isLogged()){
            setTimeout( () => {
                navigate('/home')
            }, 3000);
        }
    });

    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <LogoutBody></LogoutBody>
            <ResponsiveFooter></ResponsiveFooter>
        </>
    )
}