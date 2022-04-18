import { Component } from "react";
import SearchBar from "./SearchBar";
import RecipeGrid from "./RecipeGrid";
import { Box } from "@mui/system";
import faker from "@faker-js/faker";

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