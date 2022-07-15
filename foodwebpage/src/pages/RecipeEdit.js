import ResponsiveFooter from "../components/Footer/ResponsiveFooter";
import ResponsiveAppBar from "../components/Misc/ResponsiveNavBar";
import {RecipeEditBody} from '../components/Recipes/RecipeEditBody';

import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getRecipeById } from "../controllers/MyAppController";

import { useNavigate } from "react-router-dom";
import { isLogged } from "../utilities/UserSession";
export function RecipeEditPage(props){

    const {id} = useParams();
    const [recipeData, setRecipeData] = useState(null)

    const getRecipeDataById = async function(){
        const idRecipe = id
        let result = await getRecipeById(idRecipe)
        console.log("Recipe Data By Id: ", result.data)
        const recipeInfo = result.data;
        setRecipeData(recipeInfo)
    }

    const navigate = useNavigate();

    useEffect( () => {

        if (!isLogged())
        {
            console.log('PROHIBIDO')
            navigate('/forbidden-access')
        }
        else
            getRecipeDataById();
    }, [])

    if (recipeData !== null){
        return (
            <>
                <ResponsiveAppBar></ResponsiveAppBar>
                <RecipeEditBody recipe = {recipeData}></RecipeEditBody>
                <ResponsiveFooter></ResponsiveFooter>
            </>
        )
    }
    else {
        return (<></>)
    }
    
}