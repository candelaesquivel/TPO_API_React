import {RecipeBody} from '../components/Recipes/RecipeBody';
import ResponsiveFooter from "../components/Footer/ResponsiveFooter";
import ResponsiveAppBar from "../components/Misc/ResponsiveNavBar";

import { useParams } from "react-router-dom";

export default function RecupeViewPage(props) {
    
    const { id } = useParams();

    return (
        <div>
            <ResponsiveAppBar></ResponsiveAppBar>
            <RecipeBody idRecipe={id}></RecipeBody>
            <ResponsiveFooter></ResponsiveFooter>
        </div>
    )
}