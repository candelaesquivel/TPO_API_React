import { Component } from "react";

import ResponsiveFooter from "../components/Footer/ResponsiveFooter";
import ResponsiveAppBar from "../components/Misc/ResponsiveNavBar";
import RecipeCreateBody from '../components/Recipes/RecipeCreateBody';

class RecipeCreate extends Component{
    render(){
        return (
            <div>
                <ResponsiveAppBar></ResponsiveAppBar>
                <RecipeCreateBody></RecipeCreateBody>
                <ResponsiveFooter></ResponsiveFooter>
            </div>
        )
    }
}

export default RecipeCreate;