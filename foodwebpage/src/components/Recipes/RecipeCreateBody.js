import { Component } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { FormGroup } from "@mui/material";
import { Switch } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { FormHelperText } from "@mui/material";
import { CheckBoxList } from "../Misc/CheckBoxList";
import { UploadButton } from '../Misc/UploadButton';
import { categories } from "../../utilities/sharedData";
import DifficultyIndicator from './DifficultyIndicator';
import {Button} from "@mui/material";
import React, { useState} from 'react';
import { createRecipe as CreateRecipeController } from "../../controllers/MyAppController";
import { red } from '@mui/material/colors';
import {getUserEmail} from '../../utilities/UserSession';

// Syntax Validators
import {validateRecipeName, validateRecipeIngredients, validateRecipeProcess, validateRecipeCategories} from '../../utilities/ValidateHandlers'

export default function RecipeCreate(props){

    const [publishState, setPublishState] = useState(false);
    const [checkedCategories, setCheckedCategories] = useState([]);

    const [fieldData, setFieldData] = useState({
        recipe_name : '',
        recipe_photo : '',
        recipe_state : '',
        recipe_categories : [],
        recipe_ingredients : '',
        recipe_difficulty : '',
        recipe_process : ''
    })

    const [fieldErrorMsg, setFieldErrorMsg] = useState({
        recipe_name : '',
        recipe_photo : '',
        recipe_state : '',
        recipe_categories : '',
        recipe_ingredients : '',
        recipe_difficulty : '',
        recipe_process : ''
    });

    const [fieldErrorState, setFieldErrorState] = useState({
        recipe_name : false,
        recipe_photo : false,
        recipe_state : false,
        recipe_categories : false,
        recipe_ingredients : false,
        recipe_difficulty : false,
        recipe_process : false
    });

    const onCategorySelected = (event) => {

        console.log("Checked: ", event.target.id)

        const categoryindex = parseInt(event.target.id);
        const currentIndex = checkedCategories.indexOf(categoryindex);
        const newChecked = [...checkedCategories];
        
        console.log(typeof(categoryindex))

        if (currentIndex === -1) {
            newChecked.push(categoryindex);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setCheckedCategories(newChecked);

        var newCategories = []
        categories.forEach((itr, index) => {
            if (newChecked.indexOf(index) !== -1)
                newCategories.push(itr)
        });

        setFieldData({...fieldData, ['recipe_categories'] : newCategories})
        setFieldErrorMsg({...fieldErrorMsg, ['recipe_categories'] : ''})
        setFieldErrorState({...fieldErrorState, ['recipe_categories'] : false})
    }

    const onStatusChanged = (event) => {
        setFieldData({...fieldData, ['recipe_state'] : event.target.checked})
        setFieldErrorMsg({...fieldErrorMsg, ['recipe_state'] : ''})
        setFieldErrorState({...fieldErrorState, ['recipe_state'] : false})
    }

    const onInputChange = (event) => {

        const inputTarget = event.target;
        const inputName = inputTarget.name;
        const inputValue = inputTarget.value;

        setFieldData({...fieldData, [inputName] : inputValue})
        setFieldErrorMsg({...fieldErrorMsg, [inputName] : ''})
        setFieldErrorState({...fieldErrorState, [inputName] : false})
    }

    const createRecipe = async function() {

        console.log(fieldData['recipe_state']);

        var recipeData = {
            name :          fieldData['recipe_name'],
            categories :    fieldData['recipe_categories'],
            ingredients :   fieldData['recipe_ingredients'].split(','),
            process :       fieldData['recipe_process'],
            state :         fieldData['recipe_state'],
            difficulty :    fieldData['recipe_difficulty'],
            userEmail   :   getUserEmail(),
        }

        let result = await CreateRecipeController(recipeData);

        console.log("Recipe Create Data: ", result)

        if (result.rdo == 400)
        {
            setFieldErrorState({...fieldErrorState, ['recipe_process'] : true});
            setFieldErrorMsg({...fieldErrorMsg, ['recipe_process'] : result.mensaje})
        }
    }

    const validateInput = (target, func, errorMsg, errors, errorsMsgs) => {
        const inputValue = fieldData[target];
        const isValidInput = func(inputValue);

        errors[target] = !isValidInput;

        if (!isValidInput)
            errorsMsgs[target] = errorMsg;
        else
            errorsMsgs[target] = '';
    }
    
    const hasSyntaxErrors = (errors) => {

        for (let item in errors){
            if (errors[item] === true){
                return true;
            }
        }
        return false;
    }

    const validateRecipe = (event) => {

        // Syntax Validation
        let errorsState = fieldErrorState
        let errorsMsg   = fieldErrorMsg

        validateInput('recipe_name', validateRecipeName, 'Se requieren al menos 2 caracteres para el nombre', errorsState, errorsMsg);
        validateInput('recipe_ingredients', validateRecipeIngredients, 'Se requieren al menos 1 palabra para los ingredientes', errorsState, errorsMsg);
        validateInput('recipe_categories', validateRecipeCategories, 'Se requieren al menos 1 categoria seleccionada', errorsState, errorsMsg);
        validateInput('recipe_process', validateRecipeProcess, 'Se requieren al menos 3 caracteres para el proceso', errorsState, errorsMsg);

        const hasError = hasSyntaxErrors(errorsState);

        setFieldErrorMsg(fieldErrorMsg => (
            {
                ...fieldErrorMsg,
                ...errorsMsg
            }
        ))

        setFieldErrorState(fieldErrorState => (
            {
                ...fieldErrorState,
                ...errorsState
            }
        ))

        if (hasError){
            console.log("Recipe Data: ", fieldData)
            console.log("Errores Presentados:", errorsState)
        }
        else{
            // Backend Validation
            createRecipe()
        }

        event.preventDefault();
    }

    let postedStr = "";
    if (fieldData['recipe_state'])
        postedStr = "Publicada";
    else
        postedStr = "No publicada";

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
                        name="recipe_name"
                        defaultValue=''
                        error={fieldErrorState['recipe_name']}
                        helperText={fieldErrorMsg['recipe_name']}
                        onChange = {onInputChange}
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
                        <FormControlLabel control={<Switch defaultChecked={publishState} 
                            onChange={onStatusChanged} name='recipe_state' />} label={postedStr} />
                    </FormGroup>
                    <FormHelperText>Presionar para que la receta se publique despues de crearla</FormHelperText>
                </Grid>

                <Grid item xs={4} sm={4} md={12}>
                    <Typography>Categorías</Typography>
                </Grid>

                <Grid container item xs={4} sm={4} md={4}>
                    <Grid item xs={4} sm={4} md={4}>
                        <CheckBoxList items = {categories.slice(0, 3)} 
                            onChecked = {onCategorySelected}
                            name = 'category-one-col'
                            category_col = {0}
                        >
                        </CheckBoxList>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <CheckBoxList items = {categories.slice(3, 6)} 
                            name = 'category-two-col'
                            category_col = {3}
                            onChecked = {onCategorySelected}
                        >
                        </CheckBoxList>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <CheckBoxList items = {categories.slice(6, 9)} 
                            onChecked = {onCategorySelected}
                            category_col = {6}
                            name = 'category-three-col'>
                        </CheckBoxList>
                    </Grid>
                </Grid>

                <Grid item xs={4} sm={4} md={12}>
                    {fieldErrorState['recipe_categories'] && <Typography style={{color: {red}}}>{fieldErrorMsg['recipe_categories']}</Typography>}
                </Grid>

                <Grid item xs={4} sm={4} md={12}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Ingredientes (separados por comas)"
                        multiline
                        rows={4}
                        fullWidth
                        defaultValue=''
                        name='recipe_ingredients'
                        error={fieldErrorState['recipe_ingredients']}
                        helperText = {fieldErrorMsg['recipe_ingredients']}
                        onChange = {onInputChange}
                    />
                </Grid>

                <Grid item xs={4} sm={4} md={12}>
                    <DifficultyIndicator 
                        disabled={false} 
                        difficultyValue=''
                        name = 'recipe_difficulty'
                        onChange = {onInputChange}>
                        
                    </DifficultyIndicator>
                </Grid>

                <Grid item xs={4} sm={4} md={4}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Procedimiento"
                        multiline
                        rows={4}
                        fullWidth
                        defaultValue=""
                        name='recipe_process'
                        onChange = {onInputChange}
                        error = {fieldErrorState['recipe_process']}
                        helperText = {fieldErrorMsg['recipe_process']}
                    />
                </Grid>

                <Grid item xs={4} sm={4} md={4}>
                    <Button
                        variant = 'contained'
                        onClick = {validateRecipe}
                        >
                            Agregar Receta
                    </Button>
                </Grid>
            </Grid>
            </>
    )
}

