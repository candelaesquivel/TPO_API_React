import { Component } from "react";

import ResponsiveFooter from "../components/Footer/ResponsiveFooter";
import ResponsiveAppBar from "../components/Misc/ResponsiveNavBar";
import RecipeCreateBody from '../components/Recipes/RecipeCreateBody';

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isLogged } from "../utilities/UserSession";

export function RecipeCreate(props){

    const navigate = useNavigate();

    useEffect( () => {
        console.log('PROHIBIDO')

        if (!isLogged())
            navigate('/forbidden-access')
    }, [])

    return (
        <div>
            <ResponsiveAppBar></ResponsiveAppBar>
            <RecipeCreateBody></RecipeCreateBody>
            <ResponsiveFooter></ResponsiveFooter>
        </div>
    )
}

export default RecipeCreate;