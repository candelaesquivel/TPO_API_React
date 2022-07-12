import ResponsiveFooter from "../components/Footer/ResponsiveFooter";
import ResponsiveAppBar from "../components/Misc/ResponsiveNavBar";
import {RecipeEditBody} from '../components/Recipes/RecipeEditBody';

import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getRecipeById } from "../controllers/MyAppController";

export function RecipeEditPage(props){

    const {id} = useParams();
    const [recipeData, setRecipeData] = useState(null)

    const getRecipeDataById = async function(){
        const idRecipe = id
        let result = await getRecipeById(idRecipe)
        console.log("Recipe Data: ", result.data)
        const recipeInfo = result.data;
        setRecipeData(recipeInfo)
    }

    useEffect(() => {
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