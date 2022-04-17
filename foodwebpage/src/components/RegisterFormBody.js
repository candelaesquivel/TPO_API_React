import { Component } from "react";
import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";

// Icons
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
class RegisterFormBody extends Component{

    constructor(props){
        super(props)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.handleCleanFields = this.handleCleanFields.bind(this)
    }

    handleOnSubmit(){
        console.log("Submit Enviado")
    }

    handleCleanFields(event){
        console.log("Campos REstaurados")
    }

    render(){
        return (
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

                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
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
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            name="password"
                            label="Contrasena"
                            type="password"
                            id="password"
                            autoComplete="new-password"
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