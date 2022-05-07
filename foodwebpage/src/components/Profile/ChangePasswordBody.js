import { Component } from "react";
import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';


class ChangePasswordBody extends Component{

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
                    <ChangeCircleIcon/>
                </Avatar>
                <Typography variant='h6'>
                  Cambiar Contraseña 
                </Typography>

                <Box component="form" noValidate sx={{ mt: 3 }} >
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md:12}}>
                    
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="ContraseñaActual"
                            label="Contraseña Actual"
                            name="ContraseñaActual"
                            autoComplete="ContraseñaActual"
                            onChange = {this.handleCleanFields}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            name="ContraseñaNueva"
                            label="Contraseña Nueva"
                            type="contraseña-nueva"
                            id="contraseña-nueva"
                            autoComplete="contraseña-nueva"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            name="ContraseñaNueva2"
                            label="Repita la Contraseña Nueva"
                            type="contraseña-nueva2"
                            id="contraseña-nueva2"
                            autoComplete="contraseña-nueva2"
                            />
                        </Grid>


                    

                        <Grid item xs={12} sm={6}>
                            <Button 
                                sx={{mt:3, mb: 2}}
                                variant='contained'
                                fullWidth
                                type='onSubmit'
                               
                                >
                                Cambiar</Button>
                        </Grid>
            
                    </Grid>
                </Box>

            </Container>
        );
    }

}

export default ChangePasswordBody;