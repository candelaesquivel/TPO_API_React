import { Component } from "react";
import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import PasswordIcon from '@mui/icons-material/Password';


class ResetPasswordBody extends Component{

    

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
                    <PasswordIcon/>
                </Avatar>
                <Typography variant='h6'>
                   Recuperar Contraseña 
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
                            <Typography variant='h10'>Pregunta de seguridad: </Typography>
                            <TextField
                            required
                            fullWidth
                            name="Respuesta-seg"
                            label="Respuesta de seguridad"
                            type="respuesta-seg"
                            id="repsuesta-seg"
                            autoComplete="respuesta-seg"
                            />
                        </Grid>


                    

                        <Grid item xs={12} sm={6}>
                            <Button 
                                sx={{mt:3, mb: 2}}
                                variant='contained'
                                fullWidth
                                type='onSubmit'
                               
                                >
                                Recuperar</Button>
                        </Grid>
            
                    </Grid>
                </Box>

            </Container>
        );
    }

}

export default ResetPasswordBody;