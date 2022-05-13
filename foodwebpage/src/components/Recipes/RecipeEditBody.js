import { Grid, Stack, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { FormGroup } from "@mui/material";
import { Switch } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { FormHelperText } from "@mui/material";

import { CheckboxesTags } from "../Misc/AutoCompleteWithCheckBoxes";
import { UploadButton } from '../Misc/UploadButton';
import { categories } from "../../utilities/sharedData";
import DifficultyIndicator from './DifficultyIndicator';
import {recipes_example} from '../../utilities/sharedData';
import ResponsiveDialog from "../Misc/ResponsiveDialog";

import React, { useState } from 'react';



export function RecipeEditBody(props){

    const recipe = recipes_example.find(itr => itr.id === parseInt(props.idRecipe));

    const defaultCategoriesSelected = categories.filter( itr =>
        {
            return recipe.category.includes(itr);
        }
    )

    const [isPosted, setPosted] = useState(recipe.isPublic);

    return (
        <>
        <Grid 
            container 
            spacing={{ xs: 2, md: 3 }} 
            columns={{ xs: 4, sm: 8, md: 12 }} 
            p={12}
            direction='column'
        >
            <Grid item xs={4} sm={4} md={12}>
                <TextField
                    required
                    fullWidth
                    id="recipe-name"
                    label="Nombre de la Receta"
                    name="recipe-name"
                    defaultValue={recipe.name}
                />
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
                
            </Grid>

            <Grid item xs={4} sm={4} md={12}>
                <UploadButton text='Subir Imagen'></UploadButton>
            </Grid>

            <Grid item xs={4} sm={4} md={12}>
                <FormGroup>
                    <FormControlLabel 
                        control={<Switch />}
                        label={isPosted ? 'Publicada' : 'No publicada'} 
                        onChange = {() => setPosted(!isPosted) }
                        checked={isPosted} 
                    />
                </FormGroup>
                <FormHelperText>Presionar para que la receta se publique</FormHelperText>
            </Grid>

            <Grid item xs={4} sm={4} md={12}>
                <Typography>Categorías</Typography>
            </Grid>

            <Grid item xs={4} sm={8} md={12}>
                <CheckboxesTags 
                    selectedOptions = {defaultCategoriesSelected}
                    options = {categories}
                    placeholder='Categorías'
                    fullWidth = {true}
                    width = {'auto'}
                >
                        
                </CheckboxesTags>
            </Grid>
            <Grid item xs={4} sm={4} md={12}>
                <TextField
                    id="outlined-multiline-static"
                    label="Ingredientes"
                    multiline
                    rows={4}
                    fullWidth
                    defaultValue={recipe.ingredients.toString()}
                />
            </Grid>

            <Grid item xs={4} sm={4} md={12}>
                <DifficultyIndicator disabled={false} difficultyValue={recipe.difficulty}></DifficultyIndicator>
            </Grid>

            <Grid item xs={4} sm={4} md={4}>
                <TextField
                    id="outlined-multiline-static"
                    label="Procedimiento"
                    multiline
                    rows={4}
                    fullWidth
                    defaultValue={recipe.procedure}
                />
            </Grid>

            <Grid item xs={4} sm={4} md={4}>
                <Stack spacing={2} direction='row'>
                    <ResponsiveDialog
                        buttonText = 'Guardar Cambios'
                        messageText = 'Cambios Guardados Exitosamente'
                        messageTittle = ''
                        dialogOptionText = 'Salir'
                        dialogExitButtonColor = 'success'
                    />

                    <ResponsiveDialog
                        buttonText = 'Eliminar Receta'
                        buttonColor = 'error'
                        messageText = 'Receta Eliminada Correctamente'
                        messageTittle = ''
                        dialogOptionText = 'Salir'
                        dialogExitButtonColor = 'success'
                    />
                </Stack>
            </Grid>
        </Grid>
        </>
    )
}