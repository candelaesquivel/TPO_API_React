import { Component } from "react";
import ResponsiveFooter from "../components/ResponsiveFooter";
import ResponsiveAppBar from "../components/ResponsiveNavBar";
import RecipeEditBody from "../components/RecipeEditBody";

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