import { Component } from "react";
import {Box} from '@mui/material';
import RecipeSearchModule from '../Recipes/RecipeSearchModule';

class ResponsiveBody extends Component{

    render(){
        return(
            <>
                <Box sx={{ flexGrow: 1 }} component='body'>
                    <RecipeSearchModule readMoreLink = 'view-recipe'></RecipeSearchModule>
                </Box>
            </>
            
        )
    }
}

export default ResponsiveBody;