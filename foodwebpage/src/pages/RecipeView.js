import { Component } from "react";
import ResponsiveFooter from "../components/ResponsiveFooter";
import ResponsiveAppBar from "../components/ResponsiveNavBar";
import RecipeBody from "../components/RecipeBody";

class RecipeViewPage extends Component{
    render(){
        return (
            <div>
                <ResponsiveAppBar></ResponsiveAppBar>
                <RecipeBody></RecipeBody>
                <ResponsiveFooter></ResponsiveFooter>
            </div>
        )
    }
}

export default RecipeViewPage;