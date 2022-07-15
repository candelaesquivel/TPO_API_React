import ResponsiveFooter from "../components/Footer/ResponsiveFooter";
import { MessagePageBody } from "../components/Misc/MessagePageBody";
import ResponsiveAppBar from "../components/Misc/ResponsiveNavBar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { closeSession, isLogged } from '../utilities/UserSession'

export default function MessagePageView(props){
    
    if (props.closeSession)
        closeSession();

    const navigate = useNavigate();

    useEffect( () => {
        if (!isLogged()){
            setTimeout( () => {
                navigate(props.url)
            }, 1000);
        }
        else{
            setTimeout( () => {
                navigate(props.url)
            }, 750);
        }
    });

    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <MessagePageBody 
                message = {props.message}
            >
            </MessagePageBody>
            <ResponsiveFooter></ResponsiveFooter>
        </>
    )
}