import { Component } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import RecipeSearchModule from "./RecipeSearchModule";
import { Link } from "react-router-dom";

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
                        <Button variant='contained' component={Link} to='/edit-recipe' >Agregar Nueva Receta</Button>
                    </Grid>

                </Grid>
                    <RecipeSearchModule readMoreLink = 'edit-recipe'></RecipeSearchModule>
                </Box>
            </>
        )
    }
}

export default ProfileRecipesBody;