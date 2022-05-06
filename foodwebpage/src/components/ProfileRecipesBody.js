import { Component } from "react";
import SearchBar from "./SearchBar";
import RecipeGrid from "./RecipeGrid";
import { Box } from "@mui/system";
import faker from "@faker-js/faker";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import RecipeSearchModule from "./RecipeSearchModule";

const recipeProfileExamples = [
    { 'name' : faker.lorem.word(), 'description' : faker.lorem.sentence() },
    { 'name' : faker.lorem.word(), 'description' : faker.lorem.sentence() },
    { 'name' : faker.lorem.word(), 'description' : faker.lorem.sentence() },
    { 'name' : faker.lorem.word(), 'description' : faker.lorem.sentence() },
    { 'name' : faker.lorem.word(), 'description' : faker.lorem.sentence() },
    { 'name' : faker.lorem.word(), 'description' : faker.lorem.sentence() },
]

class ProfileRecipesBody extends Component{
    render(){
        return (
            <>
                <Box sx={{ flexGrow: 1 }} component='body'>
                <Grid 
                        container 
                        spacing={{ xs: 2, md: 3 }} 
                        columns={{ xs: 4, sm: 8, md: 12 }} 
                        p={12}
                        justifyContent='center'
                        alignItems={'center'}
                        direction='column'
                >
                    <Grid item xs={4} sm={8} md={12}>
                        <Button variant='contained'>Agregar Nueva Receta</Button>
                    </Grid>

                </Grid>
                    <RecipeSearchModule></RecipeSearchModule>
                </Box>
            </>
        )
    }
}

export default ProfileRecipesBody;