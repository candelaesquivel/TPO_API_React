import { Button, Grid, Stack, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { FormGroup } from "@mui/material";
import { Switch } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { FormHelperText } from "@mui/material";

import { UploadButton } from '../Misc/UploadButton';
import { categories } from "../../utilities/sharedData";
import DifficultyIndicator from './DifficultyIndicator';
import {useNavigate } from "react-router-dom";

import {validateRecipeName, validateRecipeIngredients, validateRecipeProcess, validateRecipeCategories, validateRecipePhoto} from '../../utilities/ValidateHandlers'
import { deleteRecipeById as DeleteRecipeInController } from "../../controllers/MyAppController";
import { uploadFileImgLocal, saveImgInCloud, updateRecipeData } from "../../controllers/MyAppController";
import {getUserEmail} from '../../utilities/UserSession';
import { CheckBoxList } from "../Misc/CheckBoxList";

import React, { useState } from 'react';


export function RecipeEditBody(props){

    const [checkedCategories, setCheckedCategories] = useState(
        props.recipe.categories.map( (itr, index) => {
            return categories.indexOf(itr)
        })
    );

    const [imageChanged, setImageChanged] = useState(false)
    const recipe = props.recipe
    const navigate = useNavigate();
    console.log("Dificultad: ", recipe.difficulty);

    const [fieldData, setFieldData] = useState({
        recipe_name : recipe.name,
        recipe_photo : recipe.photo,
        recipe_state : recipe.publicationStatus,
        recipe_categories : recipe.categories,
        recipe_ingredients : recipe.ingredients.toString(),
        recipe_difficulty : recipe.difficulty,
        recipe_process : recipe.process
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
        const categoryindex = parseInt(event.target.id);
        const currentIndex = checkedCategories.indexOf(categoryindex);
        const newChecked = [...checkedCategories];
        
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

    const onPhotoChange = (image) => {
        setImageChanged(true)
        setFieldData({...fieldData, ['recipe_photo'] : image})
        setFieldErrorMsg({...fieldErrorMsg, ['recipe_photo'] : ''})
        setFieldErrorState({...fieldErrorState, ['recipe_photo'] : false})
    }

    const onInputChange = (event) => {

        const inputTarget = event.target;
        const inputName = inputTarget.name;
        const inputValue = inputTarget.value;

        setFieldData({...fieldData, [inputName] : inputValue})
        setFieldErrorMsg({...fieldErrorMsg, [inputName] : ''})
        setFieldErrorState({...fieldErrorState, [inputName] : false})
    }

    const uploadImage = async function(image) {
        let files=[];
        let fileNames=[];
        let archivoImagen = '';
        
        console.log("image",image);
        files.push(image);
        //buscar extension archivo
        let archivoOrig = image.name;
        let posExt = archivoOrig.indexOf('.');
        let extension = archivoOrig.substring(posExt,archivoOrig.length);
        let aleatorio = Math.random().toString().substring(2,15);
        fileNames.push("img"+localStorage.getItem('nombre')+"_"+aleatorio+extension);
        //subir archivo a servidor
        archivoImagen = await uploadFileImgLocal(files,fileNames);
        //Si la imagen se subio bien la guardo en la BD
        console.log(archivoImagen);
        if (archivoImagen.ok)
        {
            let imgUser={
                email: getUserEmail(),
                imagen: fileNames[0]
            }
            let rdo = await saveImgInCloud(imgUser);
            if (rdo)
            {
                alert("Tu imagen se ha almacenado correctamente.")
                return rdo.imgUrl;
            }
        }
        else
            alert ("Ocurrio un error al subir tu imagen al servidor. Intenta mas tarde.")

        return '';
    }

    const updateRecipe = async function() {

        let imgUrl = ''

        if (imageChanged)
            imgUrl = await uploadImage(fieldData['recipe_photo']);
        else
            imgUrl = fieldData['recipe_photo']

        if (imgUrl === '')
            return;

        var recipeData = {
            idRecipe : recipe.idRecipe,
            name :          fieldData['recipe_name'],
            categories :    fieldData['recipe_categories'],
            ingredients :   fieldData['recipe_ingredients'].split(','),
            process :       fieldData['recipe_process'],
            state :         fieldData['recipe_state'],
            difficulty :    fieldData['recipe_difficulty'],
            userEmail   :   getUserEmail(),
            photo       :   imgUrl
        }

        console.log('Recipe to Update', recipeData)

        let result = await updateRecipeData(recipeData);

        console.log("Recipe Updated Data: ", result)

        if (result.rdo === 400)
        {
            setFieldErrorState({...fieldErrorState, ['recipe_process'] : true});
            setFieldErrorMsg({...fieldErrorMsg, ['recipe_process'] : result.mensaje})
        }
        else if (result.rdo === 0)
        {
            setTimeout( () => {
                navigate('/recipe-modified')
            }, 500);
        }
    }

    const deleteRecipe = async function(){
        const id = recipe.idRecipe
        let result = await DeleteRecipeInController(id)
        console.log('Delete Result: ', result);

        if (result.rdo === 0){
            navigate('/recipe-deleted')
        }
        else{
            alert(result.mensaje)
        }
    }

    const deleteButtonPressed = (event) => {
        deleteRecipe();
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
        validateInput('recipe_photo', validateRecipePhoto, 'Se requiere subir una foto para la receta', errorsState, errorsMsg);

        if (!imageChanged){
            errorsState['recipe_photo']= false
            errorsMsg['recipe_photo'] = ''
        }

        const hasError = hasSyntaxErrors(errorsState);


        if (hasError && errorsState['recipe_photo'])
        {
            alert(errorsMsg['recipe_photo']);
        }

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
            updateRecipe()
        }

        event.preventDefault();
    }

    let postedStr = "";
    if (fieldData['recipe_state'])
        postedStr = "Publicada";
    else
        postedStr = "No publicada";

    let imageLabelInfo = "";
    let showImageLabel = false;

    if (fieldErrorState['recipe_photo'])
    {
        imageLabelInfo = fieldErrorMsg['recipe_photo']
        showImageLabel = true;
    }
    else if (fieldData['recipe_photo'] !== '')
    {
        imageLabelInfo = fieldData['recipe_photo'].name;
        showImageLabel = true;
    }

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
                        defaultValue={recipe.name}
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
                    <Stack direction = 'row' spacing={2}>
                        <UploadButton text='Actualizar Imagen' 
                            setImageData = {onPhotoChange}
                            name = 'recipe_photo'
                            >
                        </UploadButton>
                        {showImageLabel && <Typography>{imageLabelInfo}</Typography>}
                    </Stack>
                </Grid>

                <Grid item xs={4} sm={4} md={12}>
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked={recipe.publicationStatus} 
                            onChange={onStatusChanged} name='recipe_state' />} label={postedStr} />
                    </FormGroup>
                    <FormHelperText>Presionar para que la receta se publique despues de crearla</FormHelperText>
                </Grid>

                <Grid item xs={4} sm={4} md={12}>
                    <Typography>Categorías</Typography>
                </Grid>

                <Grid item xs={4} sm={4} md={12}>
                    {fieldErrorState['recipe_categories'] && <Typography style={{color: 'red'}}>{fieldErrorMsg['recipe_categories']}</Typography>}
                </Grid>

                <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={4} md={4}>
                        <CheckBoxList 
                            items = {categories.slice(0, 3)} 
                            onChecked = {onCategorySelected}
                            markedItems = {recipe.categories}
                            name = 'category-one-col'
                            category_col = {0}
                        >
                        </CheckBoxList>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <CheckBoxList 
                            markedItems = {recipe.categories}
                            items = {categories.slice(3, 6)} 
                            name = 'category-two-col'
                            category_col = {3}
                            onChecked = {onCategorySelected}
                        >
                        </CheckBoxList>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <CheckBoxList 
                            markedItems = {recipe.categories}
                            items = {categories.slice(6, 9)} 
                            onChecked = {onCategorySelected}
                            category_col = {6}
                            name = 'category-three-col'>
                            recipeCategories = {recipe.categories}
                        </CheckBoxList>
                    </Grid>
                </Grid>



                <Grid item xs={4} sm={4} md={12}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Ingredientes (separados por comas)"
                        multiline
                        rows={4}
                        fullWidth
                        defaultValue={recipe.ingredients}
                        name='recipe_ingredients'
                        error={fieldErrorState['recipe_ingredients']}
                        helperText = {fieldErrorMsg['recipe_ingredients']}
                        onChange = {onInputChange}
                    />
                </Grid>

                <Grid item xs={4} sm={4} md={12}>
                    <DifficultyIndicator 
                        disabled={false} 
                        difficultyValue={recipe.difficulty}
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
                        defaultValue={recipe.process}
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
                            Guardar cambios
                    </Button>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Button
                        variant = 'contained'
                        color='error'
                        onClick = {deleteButtonPressed}
                        >
                            Eliminar Recetar
                    </Button>
                </Grid>
            </Grid>
            </>
        )
}