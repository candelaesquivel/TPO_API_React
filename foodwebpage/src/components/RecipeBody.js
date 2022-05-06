import { ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Component } from "react";
import { Grid } from "@mui/material";
import Comments from "./Comment";
import ResponsiveDialog from "./ResponsiveDialog";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

import { List, ListItem } from "@mui/material";
import DifficultyIndicator from "./DifficultyIndicator";
import CommentTextField from "./CommentTextField";
import { Rating } from "@mui/material";
import { faker } from '@faker-js/faker';

const commentsItems = [
    {'id' : 0, 'name' : faker.name.firstName(), 'email' : faker.internet.email(), 'body' : faker.lorem.paragraphs(6)},
    {'id' : 1, 'name' : faker.name.firstName(), 'email' : faker.internet.email(), 'body' : faker.lorem.paragraphs(6)},
    {'id' : 2, 'name' : faker.name.firstName(), 'email' : faker.internet.email(), 'body' : faker.lorem.paragraphs(6)},
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

class RecipeBody extends Component{
    
    render(){
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
                        <img src='/assets/img.burger.jpg'
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
                    <DifficultyIndicator difficultyValue={4} disabled = {true}></DifficultyIndicator>
                </Grid>

                <Grid item xs={4} sm={4} md={4}>
                    <Typography variant='h6'>
                        Descripcion
                    </Typography>
                    <Typography>
                        {faker.lorem.paragraphs(6)}
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

                <Grid item xs={4} sm={4} md={4}>
                    <Comments comments={commentsItems}></Comments>
                </Grid>

                <Grid item xs={4} sm={4} md={4}>
                    <CommentTextField></CommentTextField>
                </Grid>

                <Grid item xs={4} sm={4} md={4}>
                    <ResponsiveDialog buttonText='Agregar Comentario'></ResponsiveDialog>
                </Grid>


            </Grid>
        )
    }
}

export default RecipeBody;