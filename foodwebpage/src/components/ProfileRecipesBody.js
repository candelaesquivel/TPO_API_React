import { Component } from "react";
import SearchBar from "./SearchBar";
import RecipeGrid from "./RecipeGrid";
import { Box } from "@mui/system";

const recipeProfileExamples = [
    { 'name' : 'Aguacate', 'description' : 'Aguacate en agua'},
    { 'name' : 'Aguacate', 'description' : 'Aguacate en agua'},
    { 'name' : 'Aguacate', 'description' : 'Aguacate en agua'},
    { 'name' : 'Aguacate', 'description' : 'Aguacate en agua'},
    { 'name' : 'Aguacate', 'description' : 'Aguacate en agua'},
    { 'name' : 'Aguacate', 'description' : 'Aguacate en agua'},
]

class ProfileRecipesBody extends Component{
    render(){
        return (
            <>
                <Box sx={{ flexGrow: 1 }} component='body'>
                    <SearchBar></SearchBar>
                    <RecipeGrid 
                        recipes={recipeProfileExamples}
                        readMoreLink='edit-recipe'
                    >
                    </RecipeGrid>
                </Box>
            </>
        )
    }
}

export default ProfileRecipesBody;