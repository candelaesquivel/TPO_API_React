import { Component } from "react";
import {Box} from '@mui/material';

import RecipeGrid from "./RecipeGrid";
import SearchBar from "./SearchBar";
import faker from "@faker-js/faker";

const recipesInfo = [
    { 'name' : faker.lorem.word(), 'description' : faker.lorem.sentence() },
    { 'name' : faker.lorem.word(), 'description' : faker.lorem.sentence() },
    { 'name' : faker.lorem.word(), 'description' : faker.lorem.sentence() },
    { 'name' : faker.lorem.word(), 'description' : faker.lorem.sentence() },
    { 'name' : faker.lorem.word(), 'description' : faker.lorem.sentence() },
    { 'name' : faker.lorem.word(), 'description' : faker.lorem.sentence() },
]

class ResponsiveBody extends Component{

    render(){
        return(
            <Box sx={{ flexGrow: 1 }} component='body'>
                <SearchBar></SearchBar>
                <RecipeGrid 
                    recipes={recipesInfo}
                    readMoreLink='recipes'
                ></RecipeGrid>
            </Box>
        )
    }
}

export default ResponsiveBody;