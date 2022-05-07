import { Component } from "react";

import ResponsiveFooter from "../components/Footer/ResponsiveFooter";
import ResponsiveAppBar from "../components/Misc/ResponsiveNavBar";
import RecipeEditBody from '../components/Recipes/RecipeEditBody';

class RecipeEditPage extends Component{
    render(){
        return (
            <div>
                <ResponsiveAppBar></ResponsiveAppBar>
                <RecipeEditBody></RecipeEditBody>
                <ResponsiveFooter></ResponsiveFooter>
            </div>
        )
    }
}

export default RecipeEditPage;