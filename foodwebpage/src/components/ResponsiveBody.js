import { Component } from "react";
import {Box} from '@mui/material';

import RecipeGrid from "./RecipeGrid";
import SearchBar from "./SearchBar";

const recipesInfo = [
    { 'name' : 'Arroz Frito', 'description' : 'Arroz frito en aceite'},
    { 'name' : 'Arroz Frito', 'description' : 'Arroz frito en aceite'},
    { 'name' : 'Arroz Frito', 'description' : 'Arroz frito en aceite'},
    { 'name' : 'Arroz Frito', 'description' : 'Arroz frito en aceite'},
    { 'name' : 'Arroz Frito', 'description' : 'Arroz frito en aceite'},
    { 'name' : 'Arroz Frito', 'description' : 'Arroz frito en aceite'},
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