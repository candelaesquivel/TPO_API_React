import RecipeSmallCard from "./RecipeSmallCard";
import { Grid, Typography } from "@mui/material";
import React, {useState} from 'react';

export function RecipeGrid(props){

    const hasRecipes = props.recipes.length > 0;
    const hasRecipesLoaded = props.recipesLoaded

    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} p={12}>
            {
                hasRecipes && 
                props.recipes.map( itr => (
                <Grid item xs={4} sm={4} md={4}>
                    <RecipeSmallCard 
                        recipeName = {itr.name} 
                        recipeProcedure = {itr.process}
                        recipeRanking = {itr.averageMark}
                        recipeDifficulty = {itr.difficulty}
                        recipeId = {itr.idRecipe}
                        readMoreLink = {props.readMoreLink}
                        imgsrc = {itr.photo}
                    >
                    </RecipeSmallCard>
                </Grid>
                ))
            }
            {
                (!hasRecipes && hasRecipesLoaded) && 
                <Grid item xs={4} sm={8} md={12}>
                    <Typography variant='h4' align="center">No se han encontrado recetas</Typography>
                </Grid>
            }
            
        </Grid>
    )
}