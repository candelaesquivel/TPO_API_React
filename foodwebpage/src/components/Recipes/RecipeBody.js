import { ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Component } from "react";
import { Grid } from "@mui/material";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

import { List, ListItem } from "@mui/material";
import { Rating } from "@mui/material";
import {recipes_example} from '../../utilities/sharedData';
import DifficultyIndicator from "./DifficultyIndicator";


function ingredientList(ingredients){
    return (
        <>
            <List>
                {
                    ingredients.map(itr => (
                        <ListItem>
                            <ListItemIcon><RadioButtonCheckedIcon></RadioButtonCheckedIcon></ListItemIcon>
                            <ListItemText>{itr}</ListItemText>
                        </ListItem>
                    ))
                }
            </List>
        </>
    )
}

function categoriaList(categories){
    return (
        <>
            <Typography>
                Categoria: {categories.map(itr => (
                    itr + ' | '
                )).toString().split(',')}
            </Typography>
        </>
    )
}

class RecipeBody extends Component{
    
    render(){

        const recipe = recipes_example.find(itr => itr.id === parseInt(this.props.idRecipe));

        return (

            <Grid 
                container 
                spacing={{ xs: 2, md: 3 }} 
                columns={{ xs: 4, sm: 8, md: 12 }} 
                p={12}
                direction='column'
            >

                <Grid item xs={4} sm={8} md={12}>
                    <Typography variant='h4'>
                        {recipe.name}
                    </Typography>
                </Grid>
                
                <Grid 
                    item
                    container 
                    spacing={{ xs: 2, md: 3 }} 
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    alignContent='center'
                    alignItems='center'
                    justifyContent='center'
                >

                    <Grid item xs={4} sm={8} md={12}>
                        <img src={'/' + recipe.img}
                        style={{height: 'auto', width: '70%'}}
                        alt='recipe-img'
                        >
                        </img>
                    </Grid>
                </Grid>
                
                <Grid item xs={4} sm={4} md={4}>
                    <Typography>
                        Ingredientes:
                    </Typography>
                    {ingredientList(recipe.ingredients)}
                    {categoriaList(recipe.category)}
                </Grid>

                <Grid item xs={4} sm={4} md={12}>
                    <DifficultyIndicator difficultyValue={recipe.difficulty} disabled = {true}></DifficultyIndicator>
                </Grid>

                <Grid item xs={4} sm={4} md={4}>
                    <Typography variant='h6'>
                        Procedimiento
                    </Typography>
                    <Typography>
                        {recipe.procedure}
                    </Typography>
                </Grid>

                <Grid item xs={4} sm={4} md={4}>
                    <Typography variant='h6'>
                        Calificar Receta
                    </Typography>
                    <Rating>
                        name={'simple-controlled'}
                    </Rating>
                </Grid>

             

            </Grid>
        )
    }
}

export default RecipeBody;