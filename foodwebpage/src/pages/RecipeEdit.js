import ResponsiveFooter from "../components/Footer/ResponsiveFooter";
import ResponsiveAppBar from "../components/Misc/ResponsiveNavBar";
import {RecipeEditBody} from '../components/Recipes/RecipeEditBody';

import { useParams } from "react-router-dom";

export function RecipeEditPage(props){

    const {id} = useParams();

    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <RecipeEditBody idRecipe = {id}></RecipeEditBody>
            <ResponsiveFooter></ResponsiveFooter>
        </>
    )
}