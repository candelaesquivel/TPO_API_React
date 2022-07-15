
import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import { Grid } from "@mui/material";
import PasswordIcon from '@mui/icons-material/Password';
import { validateNameOrLastName, validatePhone } from "../../utilities/ValidateHandlers";
import React, { useState} from 'react';
import { getUserData } from "../../utilities/UserSession";
import {updateUserData as UpdateUserData } from '../../controllers/MyAppController'
import { useNavigate } from "react-router-dom";

export function ResetDataBody(props){

    let validateFunc;
    let defaultErrorMsg = '';
    let fieldName;

    if (props.inputLabel === 'Nombre')
    {
        fieldName = 'name';
        validateFunc = validateNameOrLastName
        defaultErrorMsg = 'Se requieren al menos 2 caracteres para el nombre'

    }
    else if (props.inputLabel === 'Apellido')
    {
        fieldName = 'lastName';
        validateFunc = validateNameOrLastName
        defaultErrorMsg = 'Se requieren al menos 2 caracteres para el apellido'
    }
    else if (props.inputLabel === 'Teléfono')
    {
        fieldName = 'phone';
        validateFunc = validatePhone
        defaultErrorMsg = 'Se requieren al menos 5 caracteres para el tlf y que sean todos numericos'
    }

    const [fieldError, setFieldError] = useState(false);
    const [fieldErrorMsg, setErrorMsg] = useState(defaultErrorMsg);
    const [fieldValue, setFieldValue] = useState('');

    const navigate = useNavigate();

    const updateUserData = async function() {
        const userData = getUserData();
        userData[fieldName] = fieldValue;

        let updateResults = await UpdateUserData(userData);

        if (updateResults.rdo === 0){
            navigate('/user-data-modified')
        }
        else{
            setFieldError(true);
            setErrorMsg(updateResults.mensaje)
        }
    }

    const modifyData = (event) => {
        // Syntax Validation
        event.preventDefault();
        const isValidInput = validateFunc(fieldValue)

        console.log("Value: ", fieldValue);
        console.log('Is Valid Input:', isValidInput)

        if (!isValidInput){
            setFieldError(true);
            setErrorMsg(defaultErrorMsg);
        }
        else{
            // Backend Validation
            console.log('Kio')
            updateUserData();
        }
    }

    const onFieldChange = (event) => {
        setFieldValue(event.target.value);
        setFieldError(false);
    }

    return(

        <Container component='main' maxWidth='xs'>
            <Box
                sx={{
                    mt: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
            </Box>

            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <PasswordIcon/>
            </Avatar>
            <Typography variant='h6'>
                {props.title}
            </Typography>

            <Box component="form" noValidate sx={{ mt: 3 }} >
                <Grid container spacing={2}>
                
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        id="name"
                        label={props.inputLabel}
                        name="name"
                        autoComplete="name"
                        onChange={onFieldChange}
                        error={fieldError}
                        helperText={fieldError ? fieldErrorMsg : ''}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Button
                        variant = 'contained'
                        onClick={modifyData}>
                            Modificar
                        </Button>
                    </Grid>
        
                </Grid>
            </Box>

        </Container>
    );
}