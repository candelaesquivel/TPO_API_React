import { Component } from "react";
import LoginIcon from '@mui/icons-material/Login';
import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

class LogInBody extends Component{

    constructor(props){
        super(props)

        this.handleCleanFields = this.handleCleanFields.bind(this);
    }

    handleCleanFields(event) {

    }

    render(){

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

                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LoginIcon />
                </Avatar>
                <Typography variant='h6'>
                    Ingresar al sitio 
                </Typography>

                <Box component="form" noValidate sx={{ mt: 3 }} >
                    <Grid container spacing={2}>
                    
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="email"
                            label="Correo Electrónico"
                            name="email"
                            autoComplete="email"
                            onChange = {this.handleCleanFields}
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
                         <Typography variant='subtitle1' color='primary' component={Link}  to='#'>
                                 ¿Has olvidado tu Contraseña? 
                            </Typography>
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
                                Ingresar</Button>
                        </Grid>
            
                    </Grid>
                </Box>

            </Container>
        );
    }

}

export default LogInBody;