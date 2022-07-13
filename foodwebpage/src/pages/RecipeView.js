import {RecipeBody} from '../components/Recipes/RecipeBody';
import ResponsiveFooter from "../components/Footer/ResponsiveFooter";
import ResponsiveAppBar from "../components/Misc/ResponsiveNavBar";

import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getRecipeById } from '../controllers/MyAppController';

export default function RecupeViewPage(props) {
    
    const { id } = useParams();

    const [recipeData, setRecipeData] = useState(null)

    const getRecipeDataById = async function(){
        const idRecipe = id
        let result = await getRecipeById(idRecipe)
        console.log("Recipe Data: ", result.data)
        const recipeInfo = result.data;
        setRecipeData(recipeInfo)
    }

    useEffect( () => {
        getRecipeDataById();
    }, [])

    if (recipeData !== null){
        return (
            <div>
                <ResponsiveAppBar></ResponsiveAppBar>
                <RecipeBody recipe = {recipeData}></RecipeBody>
                <ResponsiveFooter></ResponsiveFooter>
            </div>
        )
    }
    else{
        return (<>
            <ResponsiveAppBar></ResponsiveAppBar>
            <ResponsiveFooter></ResponsiveFooter>
        </>)
    }
    
}