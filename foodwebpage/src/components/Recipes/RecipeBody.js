import { ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { CheckboxesTags } from "../Misc/AutoCompleteWithCheckBoxes";
import { List, ListItem } from "@mui/material";
import { Rating } from "@mui/material";
import {recipes_example, categories} from '../../utilities/sharedData';
import DifficultyIndicator from "./DifficultyIndicator";
import { isLogged } from "../../utilities/UserSession";
import React, {useEffect, useState} from 'react';
import { Dialog } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogActions } from "@mui/material";
import { DialogContentText } from "@mui/material";
import { Button } from "@mui/material";

import {getRecipeById} from '../../controllers/MyAppController'

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

export function RecipeBody(props){
    const [isDialogOpen, setDialogOpen]=useState(false);
    const[dialogText,setDialogText]=useState("");

    const [recipeData, setRecipeData] = useState(null)

    const isExitToggle=(event)=>{
        setDialogOpen(false);
    }

    const getRecipeDataById = async function(){
        const idRecipe = props.idRecipe
        let result = await getRecipeById(idRecipe)
        console.log("Recipe Data: ", result.data)
        const recipeInfo = result.data;

        setRecipeData(recipeInfo)
    }

    useEffect( () => {
        getRecipeDataById();
    }, [])

    const ratingChange = (event) => {
        setDialogOpen(true);
        if(isLogged()){
            setDialogText('Se califico correctamente')
        }else{
            setDialogText('ERROR/ tiene que logearse para calificar')
        }
    };

    console.log('Recipe Data: ', recipeData)

    const Body = (props) => {
        const recipeData = props.recipeData;
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
                    {recipeData.name}
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
                    <img src={recipeData.photo}
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
                {ingredientList(recipeData.ingredients)}
            </Grid>

            <Grid item xs={4} sm={8} md={12}>
                <Typography mb={2}>Categorías</Typography>
                <CheckboxesTags 
                    selectedOptions = {recipeData.categories}
                    options = {categories}
                    placeholder=''
                    fullWidth = {true}
                    width = {'auto'}
                    disabled = {true}
                >
                </CheckboxesTags>
            </Grid>

            <Grid item xs={4} sm={4} md={12}>
                <DifficultyIndicator difficultyValue={recipeData.difficulty} disabled = {true}></DifficultyIndicator>
            </Grid>

            <Grid item xs={4} sm={4} md={4}>
                <Typography variant='h6'>
                    Procedimiento
                </Typography>
                <Typography>
                    {recipeData.process}
                </Typography>
            </Grid>

            <Grid item xs={4} sm={4} md={4}>
                <Typography variant='h6'>
                    Calificar Receta
                </Typography>
                <Rating onChange={ratingChange}>
                    name={'simple-controlled'}
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

    if (recipeData !== null)
    {
        return (
            <><Body recipeData = {recipeData}></Body></>
        )
    }
    else{
        return (
            <>
                
            </>
        )
    }
}

export default RecipeBody;