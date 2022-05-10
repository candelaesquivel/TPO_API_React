import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import {users_info} from '../../utilities/sharedData';
import React, {useState} from 'react';
import { isNumeric } from "../../utilities/stringFunctions";
import {isValidEmailWithRegex, isValidPassword} from '../../utilities/stringFunctions'

export function RegisterFormBody(props){

    const [isEmailValid, setEmailValid] = useState(true);
    const [emailHelperText, setEmailHelperText] = useState('');

    const [isNameValid, setNameValid] = useState(true);
    const [isLastNameValid, setLastNameValid] = useState(true);
    const [isPhoneValid, setPhoneValid] = useState(true);
    const [isQuestionValid, setQuestionValid] = useState(true);
    const [isAnswerValid, setAnswerValid] = useState(true);
    const [isPasswordValid, setPasswordValid] = useState(true);

    const [passwordHelperText, setPasswordHelperText] = useState('');
    const [questionHelperText, setQuestionHelperText] = useState('');
    const [answerHelperText, setAnswerHelperText] = useState('');

    const onEmailChange = (event) => 
    {
        const email = event.target.value;

        if (!isValidEmailWithRegex(email)){
            setEmailValid(false);
            setEmailHelperText('Correo Electrónico no valido');
            return;
        }

        const isValid = users_info.every(itr => {
            return itr.email !== email;
        });

        setEmailValid(isValid);

        if (isValid)
            setEmailHelperText('')
        else
            setEmailHelperText('Correo Electrónico en uso')
    };

    const validateNameOrLastName = (name) => {

        if (name.length === 0)
            return true;
        
        return name.length >= 2 && !isNumeric(name);
    }
    
    const validatePhone = (phone) => {
        return phone.length >= 5 && isNumeric(phone);
    }

    const onNameChange = (event) =>
    {
        setNameValid(validateNameOrLastName(event.target.value));
    }

    const onLastNameChange = (event) => 
    {
        setLastNameValid(validateNameOrLastName(event.target.value));
    }

    const onPhoneChange = (event) =>{
        setPhoneValid(validatePhone(event.target.value));
    }

    const onQuestionChange = (event) => {

        if (event.target.value.length === 0)
        {
            setQuestionValid(true);
            setQuestionHelperText('');
        }
        else
        {
            setQuestionValid(event.target.length >= 5);
            setQuestionHelperText('La pregunta necesita ');
        }
    }

    const onAnswerChange = (event) => {
        setAnswerValid(event.target.length >= 2);
    }

    const onPasswordChange = (event) => {
        setPasswordValid(isValidPassword(event.target.value))
    }

    const validateForm = (event) => {
        event.preventDefault();

        const name = event.target.name.name.value;
        const lastName = event.target.lastName.value;
        const phone = event.target.phone.value;

        /** Validacion de Nombre */
        if (name.length < 2 || isNumeric(name))
            setNameValid(false);
    };

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
                            onChange={onNameChange}
                            error={!isNameValid}
                            helperText={isNameValid ? '' : 'El nombre debe tener como minimo 2 letras'}
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
                            onChange={onLastNameChange}
                            error={!isLastNameValid}
                            helperText={isNameValid ? '' : 'El apellido debe tener como minimo 2 letras'}
                        >
                        </TextField>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        id="email"
                        label="Correo Electronico"
                        name="email"
                        autoComplete="email"
                        onChange = {onEmailChange}
                        error = {!isEmailValid}
                        helperText = {emailHelperText}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        name="telefono"
                        label="Telefono"
                        type="number"
                        id="password"
                        autoComplete="Telefono"
                        onChange={onPhoneChange}
                        error={!isPhoneValid}
                        helperText={isPhoneValid ? '' : 'El telefono debe contener solo numeros y tener minimo 7 caracteres'}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        onChange={onPasswordChange}
                        error={!isPasswordValid}
                        helperText={passwordHelperText}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        name="pregunta-seg"
                        label="Pregunta de seguridad"
                        type="preg-seg"
                        id="preg-seg"
                        autoComplete="Pregunta de seguridad"
                        onChange={onQuestionChange}
                        error={!isQuestionValid}
                        helperText={questionHelperText}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        name="repuesta"
                        label="Respuesta de pregunta de seguridad"
                        type="password"
                        id="respuesta-preg-de-seg"
                        autoComplete="respuesta "
                        onChange={onAnswerChange}
                        error={!isAnswerValid}
                        helperText={answerHelperText}
                        />
                    </Grid>
                </Grid>

                <Grid item xs={4} sm={8} md={12}>
                    <Button 
                        sx={{mt:3, mb: 2}}
                        variant='contained'
                        fullWidth
                        type='onSubmit'
                        >
                        Registrar</Button>
                </Grid>
            </Box>

        </Container>
    )
}
