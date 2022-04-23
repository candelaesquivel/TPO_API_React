import { Component } from "react";
import LoginIcon from '@mui/icons-material/Login';
import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

class LogInBody extends Component{
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

                <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={this.handleOnSubmit}>
                    <Grid container spacing={2}>
                    
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

                        <Grid item xs={12}>
                         <Typography variant='subtitle1' color='primary' component={Link}  to='#'>
                                 Has olvidado tu contrasena ? 
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