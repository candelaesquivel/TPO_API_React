import { Component } from "react";
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

class LogInBody extends Component{

    constructor(props){
        super(props)

        this.state = {
            isValidAccount : false
        };

        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnSubmit(event){

        const email = event.target.email.value;
        const password = event.target.password.value;

        if (!isValidAccount(email, password))
        {
            event.preventDefault();
        }
        else{
    
            setGlobalLogged(true);

            this.setState({
                isValidAccount : true
            });
        }
    }

    render(){

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

                <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={this.handleOnSubmit} >
                    <Grid container spacing={2}>
                    
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="email"
                            label="Correo Electrónico"
                            name="email"
                            autoComplete="email"
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
                        this.state.isValidAccount && <Navigate to='/profile' replace={true}></Navigate>
                    }

                </Box>

            </Container>
        );
    }

}

export default LogInBody;