import { Component } from "react";
import ResponsiveFooter from "../components/ResponsiveFooter";
import ResponsiveAppBar from "../components/ResponsiveNavBar";
import RecipeBody from "../components/RecipeBody";
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