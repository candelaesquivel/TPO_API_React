import ResponsiveAppBar from "../components/Misc/ResponsiveNavBar";
import ResponsiveFooter from "../components/Footer/ResponsiveFooter";
import {ResetDataBody} from '../components/ResetData/ResetDataBody';

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isLogged } from "../utilities/UserSession";

export function ModifyProfileDataView(props){

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
        <ResetDataBody title={props.title} inputLabel={props.inputLabel}></ResetDataBody>
        <ResponsiveFooter></ResponsiveFooter>
        </>
    )
}