import { Button, Divider, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Component } from "react";
import { Grid } from "@mui/material";
import Comments from "./Comment";
import BurgerImage from "../assets/img/burger.jpg"

import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

import { List, ListItem } from "@mui/material";
import DifficultyIndicator from "./DifficultyIndicator";
import CommentTextField from "./CommentTextField";
import { Rating } from "@mui/material";

const commentsItems = [
    {'id' : 0, 'name' : 'Pedrito', 'email' : 'pedrito@gmail.com', 'body' : 'Hola'},
    {'id' : 1, 'name' : 'Pablo', 'email' : 'pablo@gmail.com', 'body' : 'Medio'},
    {'id' : 2, 'name' : 'Marco', 'email' : 'marco@gmail.com', 'body' : 'Adios'},
]

const ingredientsExample = [
    'Harina de Trigo',
    'Huevos',
    'Aguacate'
]

const categoriesExample = [
    'Sin Grasas',
    'Alto en Azucar',
    'Vegetariano'
]

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

class RecipeModifyBody extends Component{
    
    render(){

        const handleClickOpen = () => {
            setOpen(true);
          };

        return (
            <Grid 
                container 
                spacing={{ xs: 2, md: 3 }} 
                columns={{ xs: 4, sm: 8, md: 12 }} 
                p={12}
                direction='column'
            >
                
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
                        <img src={BurgerImage}
                        style={{height: 'auto', width: '100%', maxWidth : '900px'}}
                        alt='recipe-img'
                        >
                        </img>
                    </Grid>
                </Grid>
                
                <Grid item xs={4} sm={4} md={4}>
                    <Typography>
                        Ingredientes:
                    </Typography>
                    {ingredientList(ingredientsExample)}
                    {categoriaList(categoriesExample)}
                </Grid>

                <Grid item xs={4} sm={4} md={12}>
                    <DifficultyIndicator difficultyValue='4'></DifficultyIndicator>
                </Grid>

                <Grid item xs={4} sm={4} md={4}>
                    <Typography variant='h6'>
                        Descripcion
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </Grid>

                <Grid item xs={4} sm={4} md={4}>
                    <Typography variant='h6'>
                        Calificar Receta
                    </Typography>
                    <Rating>
                        name="simple-controlled"
                    </Rating>
                </Grid>

                <Grid item xs={4} sm={4} md={4}>
                    <CommentTextField></CommentTextField>
                </Grid>

                <Grid item xs={4} sm={4} md={4}>
                    
                </Grid>


            </Grid>
        )
    }
}

export default RecipeModifyBody;