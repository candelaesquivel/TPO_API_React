import React, {useState} from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { isValidEmailWithRegex } from '../../utilities/stringFunctions';

import { login as LoginController } from '../../controllers/MyAppController';
import { ErrorCodes } from '../../controllers/Constants';

export function LogInBody(props){

    const [isValidPassword, setValidPassword] = useState(true);
    const [isValidEmail, setValidEmail] = useState(true);
    const [hasLogin, setHasLogin] = useState(false);
    const [errorPassMsg, setPasswordErrorMsg] = useState('');
    const [emailErrorMsg, setEmailErrorMsg] = useState('');

 
    const validateEmailSyntax = (mail) => {
        let result = {status : true, errorMsg : "" }

        console.log("Mail Value: ", mail)

        if (mail === "")
            result = {status : false, errorMsg : "El mail no puede ser vacio"}
        else if (!isValidEmailWithRegex(mail))
            result = { status : false, errorMsg : "El mail no tiene un formato valido" }

        return result;
    }

    const validateLogin = async function(email, password){
        const datos = {
            email : email,
            password : password
        }

        let loginResult = await LoginController(datos);

        if (loginResult.rdo === 400)
        {
            switch (loginResult.errorCode)
            {
                case ErrorCodes.ERROR_MAIL_NOT_ASSOCIATED:
                {
                    setValidEmail(false);
                    setEmailErrorMsg(loginResult.mensaje);
                    break;
                }

                case ErrorCodes.ERROR_PASSWORD_NOT_VALID:{
                    setValidPassword(false);
                    setPasswordErrorMsg(loginResult.mensaje);
                    break;
                }
            }
        }
        else if (loginResult.rdo == 0)
        {
            setHasLogin(true);
        }
    }

    const handleOnLoginSubmit = async (event) => {
        console.log("On Login");

        const email = event.target.email.value;
        const password = event.target.password.value;
        const emailValidation = validateEmailSyntax(email)

        setValidEmail(true);
        setEmailErrorMsg('');

        setValidPassword(true);
        setPasswordErrorMsg('');

        console.log("Email Validation: " , emailValidation)

        if (!emailValidation.status)
        {
            setValidEmail(emailValidation.status);
            setEmailErrorMsg(emailValidation.errorMsg);
            event.preventDefault();
            return
        }

        if (password === "")
        {
            setPasswordErrorMsg("Password no puede ser vacio");
            setValidPassword(false);
            event.preventDefault();
            return;
        }

        validateLogin(email, password);
        event.preventDefault();
    };

    const handleMailChange = (event) => {
        setValidEmail(true);
        setEmailErrorMsg('');
    }

    const handlePassChange = (event) => {
        setPasswordErrorMsg('');
        setValidPassword(true);
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
                <LoginIcon />
            </Avatar>
            <Typography variant='h6'>
                Ingresar al sitio 
            </Typography>

            <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleOnLoginSubmit} >
                <Grid container spacing={2}>
                
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        id="email"
                        label="Correo Electrónico"
                        name="email"
                        autoComplete="email"
                        error = {!isValidEmail}
                        helperText = {emailErrorMsg}
                        onChange = {handleMailChange}
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
                        error = {!isValidPassword}
                        helperText = {errorPassMsg}
                        onChange = {handlePassChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                     <Typography variant='subtitle1' color='primary' component={Link} to='/ResetPassword'>
                            Olvide Contraseña
                        </Typography>
                    </Grid>
                </Grid>

               
                <Grid item xs={12} sm={6}>
                        <Button 
                            sx={{mt:3, mb: 2}}
                            variant='contained'
                            fullWidth
                            type='submit'
                            >
                            Ingresar</Button>
                </Grid>

                {
                    hasLogin && <Navigate to='/profile' replace={true}></Navigate>
                }

            </Box>
        </Container>
    );
}