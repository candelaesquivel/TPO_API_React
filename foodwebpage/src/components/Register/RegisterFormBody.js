import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import React, { useState} from 'react';
import {isValidPassword} from '../../utilities/stringFunctions'
import { BasicDialog } from "../Misc/BasicDialog";
import {useNavigate } from "react-router-dom";

import { validateNameOrLastName, validatePhone, validateEmailEmpty, 
validateEmailSyntax, validateSecurityAnswerSyntax, validateSecurityQuestionSyntax } from "../../utilities/ValidateHandlers";


export function RegisterFormBody(props){

    const [isResultDialogOpen, setResultDialogOpen] = useState(false);
    const [resultDialogText, setResultDialogText] = useState('');
    const [isValidForm, setValidForm] = useState('false');
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        'name' : '',
        'lastName' : '',
        'email' : '',
        'phone' : '',
        'password' : '',
        'securityQuestion' : '',
        'securityAnswer' : ''
    });

    const [errorMsg, setErrorMsg] = useState({
        name : '',
        lastName : '',
        email : '',
        phone : '',
        password : '',
        securityQuestion : '',
        securityAnswer : ''
    });

    const [hasError, setHasError] = useState({
        name : false,
        lastName : false,
        email : false,
        phone : false,
        password : false,
        securityQuestion : false,
        securityAnswer : false
    });

    const onInputChange = (event) => {

        const inputTarget = event.target;
        const inputName = inputTarget.name;
        const inputValue = inputTarget.value;

        setUserData({...userData, [inputName] : inputValue})
        setErrorMsg({...errorMsg, [inputName] : ''})
        setHasError({...hasError, [inputName] : false})
    }

    const validateInput = (target, func, errorMsg, errors, errorsMsgs) => {
        const inputValue = userData[target];
        const isValidInput = func(inputValue);

        errors[target] = !isValidInput;

        if (!isValidInput)
            errorsMsgs[target] = errorMsg;
        else
            errorsMsgs[target] = '';
    }

    const validateForm = (event) => {

        console.log('OnSubmit Enviado');
        event.preventDefault();

        let errors = hasError;
        let errorsMsgs = errorMsg;

        // /** Validacion de Nombre */
        validateInput('name', validateNameOrLastName, 'Se requieren al menos 2 caracteres para el nombre', errors, errorsMsgs);

        // /** Validacion de Nombre */
        validateInput('lastName', validateNameOrLastName, 'Se requieren al menos 2 caracteres para el apellido', errors, errorsMsgs);

        // /** Validacion de Telefono */
        validateInput('phone', validatePhone, 'Se requieren al menos 5 caracteres para el tlf y que sean todos numericos', errors, errorsMsgs);

        // /** Validacion de Pregunta de Seguridad */
        validateInput('securityQuestion', validateSecurityQuestionSyntax, 'La pregunta necesita al menos 5 caracteres', errors, errorsMsgs);

        // /** Validacion de Respuesta de Seguridad */
        validateInput('securityAnswer', validateSecurityAnswerSyntax, 'La respuesta necesita al menos 2 caracteres', errors, errorsMsgs);

        // /** Validacion de Password */
        validateInput('password', isValidPassword, 'Password no valido, se requieren al menos 7 caracteres y debe contener al menos 1 letra y 1 un numero', errors, errorsMsgs);

        console.log(isValidPassword(userData['password']))

        // /** Validacion de Email */
        validateInput('email', validateEmailEmpty, 'El mail no puede ser vacio', errors, errorsMsgs);

        if (!hasError['email'])
            validateInput('email', validateEmailSyntax, 'El mail no tiene un formato valido', errors, errorsMsgs);


        setHasError(errors);
        setErrorMsg(errorsMsgs);

        console.log('Errors: ', errors);

        let hasNotErrors = true;

        for (let item in errors){

            console.log('Item: ', errors[item], "Value: ", item)

            if (errors[item] === true){
                hasNotErrors = false;
                break;
            }
        }

        setValidForm(hasNotErrors);

        if (hasNotErrors){
            setResultDialogText('Registro Exitoso, en breve sera redirigido a la pagina de login');
            setTimeout(() => {
                navigate('/login')
            }, 1000);
        }
        else
            setResultDialogText('Alguno de los campos contienen errores, verifiquelos e intente de nuevo');

        setResultDialogOpen(true);
    };

    const onExitClicked = (event) => {
        setResultDialogOpen(!isResultDialogOpen);
    }

    return (
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
                <HowToRegIcon />
            </Avatar>
            <Typography variant='h6'>
                Creación de Cuentas
            </Typography>

            <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={validateForm} >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="given-name"
                            name='name'
                            required
                            fullWidth
                            label='Nombre'
                            value={userData['name']}
                            onChange={onInputChange}
                            error={hasError['name']}
                            helperText={errorMsg['name']}
                        >
                        </TextField>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            autoComplete="given-name"
                            name='lastName'
                            required
                            fullWidth
                            label='Apellido'
                            onChange={onInputChange}
                            error={hasError['lastName']}
                            helperText={errorMsg['lastName']}
                        >
                        </TextField>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        label="Correo Electronico"
                        name="email"
                        autoComplete="email"
                        onChange = {onInputChange}
                        error={hasError['email']}
                        helperText={errorMsg['email']}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        name="phone"
                        label="Telefono"
                        type="number"
                        onChange={onInputChange}
                        error={hasError['phone']}
                        helperText={errorMsg['phone']}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        onChange={onInputChange}
                        error={hasError['password']}
                        helperText={errorMsg['password']}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        name="securityQuestion"
                        label="Pregunta de seguridad"
                        type="text"
                        autoComplete="Pregunta de seguridad"
                        onChange={onInputChange}
                        error={hasError['securityQuestion']}
                        helperText={errorMsg['securityQuestion']}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        name="securityAnswer"
                        label="Respuesta de pregunta de seguridad"
                        type="text"
                        autoComplete="respuesta "
                        onChange={onInputChange}
                        error={hasError['securityAnswer']}
                        helperText={errorMsg['securityAnswer']}
                        />
                    </Grid>
                </Grid>

                <Grid item xs={4} sm={8} md={12}>
                    <Button 
                        sx={{mt:3, mb: 2}}
                        variant='contained'
                        fullWidth
                        type='submit'
                        >
                        Registrar</Button>
                </Grid>

                <BasicDialog
                    open={isResultDialogOpen}
                    dialogContentText={resultDialogText}
                    onExitButtonPressed={onExitClicked}
                >

                </BasicDialog>

            </Box>

        </Container>
    )
}
