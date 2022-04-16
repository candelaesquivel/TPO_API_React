import { Component } from "react";
import RecipeSmallCard from "./RecipeSmallCard";
import { Grid } from "@mui/material";

class RecipeGrid extends Component{

    constructor(props){
        super(props)
        this.state = {
            recipes : props.recipes
        }
    }

    render(){
        return (
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} p={12}>
                {this.state.recipes.map( itr => (
                <Grid item xs={2} sm={4} md={4}>
                    <RecipeSmallCard 
                        recipeName = {itr.name} 
                        recipeDescription = {itr.description}>
                    </RecipeSmallCard>
                </Grid>
                ))}
            </Grid>
        )
    }
}

export default RecipeGrid;