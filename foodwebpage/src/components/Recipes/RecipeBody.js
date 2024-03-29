import { ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { CheckboxesTags } from "../Misc/AutoCompleteWithCheckBoxes";
import { List, ListItem } from "@mui/material";
import { Rating } from "@mui/material";
import { categories} from '../../utilities/sharedData';
import DifficultyIndicator from "./DifficultyIndicator";
import { getUserEmail, isLogged } from "../../utilities/UserSession";
import React, {useState} from 'react';
import { Dialog } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogActions } from "@mui/material";
import { DialogContentText } from "@mui/material";
import { Button } from "@mui/material";
import {califyRecipe as CalifyRecipeController} from '../../controllers/MyAppController'

const ingredientList = function (ingredients){
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

export function RecipeBody(props){
    const [isDialogOpen, setDialogOpen]=useState(false);
    const[dialogText,setDialogText]=useState("");

    const isExitToggle=(event)=>{
        setDialogOpen(false);
    }
    
    const recipe = props.recipe;

    const califyRecipe = async function (califyValue){

        const califyInfo = {
            email : getUserEmail(),
            calification : califyValue,
            idRecipe : recipe.idRecipe
        }

        let response = await CalifyRecipeController(califyInfo)
        console.log('Calify Response: ', response)
        setDialogText(response.mensaje)
    }

    const ratingChange = (event) => {
        if(isLogged()){
            califyRecipe(event.target.value)
        }else{
            setDialogText('Error tiene que logearse para calificar')
        }
        setDialogOpen(true);
    };

    return (
            <>
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
                    <img src={recipe.photo}
                    style={{height: 'auto', width: '50%'}}
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
            </Grid>

            <Grid item xs={4} sm={8} md={12}>
                <Typography mb={2}>Categorías</Typography>
                <CheckboxesTags 
                    selectedOptions = {recipe.categories}
                    options = {categories}
                    placeholder=''
                    fullWidth = {true}
                    width = {'auto'}
                    disabled = {true}
                >
                </CheckboxesTags>
            </Grid>

            <Grid item xs={4} sm={4} md={12}>
                <DifficultyIndicator difficultyValue={recipe.difficulty} disabled = {true}></DifficultyIndicator>
            </Grid>

            <Grid item xs={4} sm={4} md={4}>
                <Typography variant='h6'>
                    Procedimiento
                </Typography>
                <Typography>
                    {recipe.process}
                </Typography>
            </Grid>

            <Grid item xs={4} sm={4} md={4}>
                <Typography variant='h6'>
                    Calificar Receta
                </Typography>
                <Rating 
                    onChange={ratingChange}
                    defaultValue={recipe.averageMark}
                    name={'simple-controlled'}
                >
                </Rating>
                <Dialog  open={isDialogOpen}>
                <DialogTitle></DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      {dialogText}
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={isExitToggle}
                    >Salir
                    </Button>
                  </DialogActions>
              </Dialog>

            </Grid>

            

        </Grid>
            </>
        )
}

export default RecipeBody;