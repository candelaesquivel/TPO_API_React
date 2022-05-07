import { Component } from "react";
import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import {users_info} from '../../utilities/sharedData';

class RegisterFormBody extends Component{

    constructor(props){
        super(props)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.handleCleanFields = this.handleCleanFields.bind(this)

        this.state = {
          isValidEmail : true  
        };

        this.handleEmailValidation = this.handleEmailValidation.bind(this);
    }

    handleOnSubmit(){
        console.log("Submit Enviado")
    }

    handleCleanFields(event){
        console.log("Campos REstaurados")
    }

    handleEmailValidation(event){

        const email = event.target.value;

        const isValid = users_info.every(itr => {
            return itr.email !== email
        });

        this.setState({
            isValidEmail : isValid
        });
    }

    render(){

        let emailHelperText = "";

        if (!this.state.isValidEmail)
            emailHelperText = "Corrreo Electronico en Uso";
        
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
                    Creacion de Cuentas
                </Typography>

                <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={this.handleOnSubmit}>
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
                            onChange = {this.handleEmailValidation}
                            error = {!this.state.isValidEmail}
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

                    <Grid container spacing={2} direction='row'>
                        <Grid item xs={12} sm={6}>
                        <Button 
                                sx={{mt:3, mb: 2}}
                                variant='contained'
                                fullWidth
                                onClick={this.handleCleanFields}
                                >
                                Limpiar Campos</Button>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Button 
                                sx={{mt:3, mb: 2}}
                                variant='contained'
                                fullWidth
                                type='onSubmit'
                                >
                                Registrar</Button>
                        </Grid>
                    </Grid>
                </Box>

            </Container>
        )
    }
}

export default RegisterFormBody;