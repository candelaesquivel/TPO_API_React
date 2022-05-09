import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import {users_info} from '../../utilities/sharedData';
import React, {useState} from 'react';


export function RegisterFormBody(props){

    const [isEmailValid, setEmailValid] = useState(true);
    const [emailHelperText, setEmailHelperText] = useState('');

    const validateEmail = (event) => 
    {
        const email = event.target.value;

        const isValid = users_info.every(itr => {
            return itr.email !== email;
        });

        setEmailValid(isValid);

        if (isValid)
            setEmailHelperText('')
        else
            setEmailHelperText('Correo Electrónico en uso')
    };

    const validateForm = (event) => {
        event.preventDefault();

        
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
                            name='Nombre'
                            required
                            fullWidth
                            label='Nombre'
                        >
                        </TextField>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            autoComplete="given-name"
                            name='Apellido'
                            required
                            fullWidth
                            label='Apellido'
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
                        onChange = {validateEmail}
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
