import React, {useState} from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { isValidAccount } from "../../utilities/sharedData";
import { setGlobalLogged } from '../../utilities/UserSession';

export function LogInBody(props){

    const [isValidPassword, setValidPassword] = useState(true);
    const [isValidEmail, setValidEmail] = useState(true);
    const [isLogged, setLogged] = useState(false);
    const [errorPassMsg, setErrorPassword] = useState('');
    const [emailErrorMsg, setEmailErrorMsg] = useState('');


    const handleOnLoginSubmit = (event) => {
        const email = event.target.email.value;
        const password = event.target.password.value;
        const validateValues = isValidAccount(email, password);

        setLogged(validateValues.isValid);

        if (validateValues.isValid){
            setGlobalLogged(true, email);
        }
        else{
            event.preventDefault();

            if (validateValues.passError.length > 0)
            {
                setErrorPassword(validateValues.passError);
                setValidPassword(false);
            }
            else if (validateValues.emailNotFoundError.length > 0)
            {
                setEmailErrorMsg(validateValues.emailNotFoundError);
                setValidEmail(false);
            }
        }
    };

    const handleMailChange = (event) => {
        setValidEmail(true);
        setEmailErrorMsg('');
    }

    const handlePassChange = (event) => {
        setErrorPassword('');
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
                    isLogged && <Navigate to='/profile' replace={true}></Navigate>
                }

            </Box>
        </Container>
    );
}