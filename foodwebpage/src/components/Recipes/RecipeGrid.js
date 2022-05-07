import { Component } from "react";
import RecipeSmallCard from "./RecipeSmallCard";
import { Grid } from "@mui/material";

class RecipeGrid extends Component{

    render(){
        return (
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} p={12}>
                {
                    this.props.recipes.map( itr => (
                    <Grid item xs={4} sm={4} md={4}>
                        <RecipeSmallCard 
                            recipeName = {itr.name} 
                            recipeProcedure = {itr.procedure}
                            recipeRanking = {itr.ranking}
                            recipeDifficulty = {itr.difficulty}
                            recipeId = {itr.id}
                            readMoreLink = {this.props.readMoreLink}
                            imgsrc = {itr.img}
                        >
                        </RecipeSmallCard>
                    </Grid>
                    ))
                }
            </Grid>
        )
    }
}

export default RecipeGrid;