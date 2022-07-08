import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import React, { useEffect, useState} from 'react';
import {useNavigate } from "react-router-dom";
import { isValidPassword } from "../../utilities/stringFunctions";

export function ChangePasswordBody(props){
        
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [areSamePasswords, setSamePasswords] = useState(true);
    const [isCurrentPassRight, setIsCurrentPassRight] = useState(true);
    const [isFormValid, setIsFormValid] = useState(false);
    const [errorMsg, setErrorMsg] = useState('')

    const navigate = useNavigate();

    const onConfirmPasswordChange = (event) => {
        setConfirmNewPassword(event.target.value);
        setSamePasswords(true);
    }

    const onNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
        setSamePasswords(true);
    }

    const onCurrentPassChange = (event) => {
        setCurrentPassword(event.target.value);
        setIsCurrentPassRight(true);
    }

    const onSubmitData = (event) => {

        if (!isValidPassword(newPassword))
        {
            setErrorMsg('Password no valido, se requieren al menos 7 caracteres y debe contener al menos 1 letra y 1 un numero')
            setIsCurrentPassRight(false);
            event.preventDefault();
            return;
        }

        // Backend Validation
    }

    useEffect( () => {

        if (isFormValid){
            setTimeout( () => {
                navigate('/profile')
            }, 1000)
        }
    })

    return(
        <Container component='main' maxWidth='xs'>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
            </Box>

            {
                !isFormValid && 
                <>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <ChangeCircleIcon/>
                </Avatar>

                <Typography variant='h6'>
                    Cambiar Contraseña 
                </Typography>

                <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={onSubmitData}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md:12}}>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="current-password"
                            label="Contraseña Actual"
                            name="current-password"
                            type='password'
                            onChange={onCurrentPassChange}
                            error = {!isCurrentPassRight}
                            helperText = {isCurrentPassRight ? '' : 'El password actual no coincide con los datos'}
                            autoComplete
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            name="ContraseñaNueva"
                            label="Contraseña Nueva"
                            type="password"
                            id="new-password"
                            onChange={onNewPasswordChange}
                            error={!areSamePasswords}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            name="ContraseñaNueva2"
                            label="Repita la Contraseña Nueva"
                            type="password"
                            id="confirm-new-password"
                            onChange={onConfirmPasswordChange}
                            error={!areSamePasswords}
                            helperText={!areSamePasswords ? 'Las nuevas contraseñas deben coincidir' : ''}
                            />
                        </Grid>


                        <Grid item xs={12}>
                            <Button 
                                sx={{mt:3, mb: 2}}
                                variant='contained'
                                fullWidth
                                type='submit'
                                >
                                Cambiar</Button>
                        </Grid>
                    </Grid>
                </Box>
            </>
            }
            {
                isFormValid && 
                <>
                    <Typography>Contraseña cambiada correctamente, en breve sera redirigido</Typography>
                </>
            }

        </Container>
    );
}