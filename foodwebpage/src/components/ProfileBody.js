import { Typography } from "@mui/material";
import { Component } from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MessageIcon from '@mui/icons-material/Message';


class ProfileBody extends Component{
   
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

               
                <Typography variant='h6'>
                    Mi Perfil
                </Typography>

                

                <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={this.handleOnSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                        <Typography variant='h8'>
                            Mis Datos
                         </Typography>
                         
                        </Grid>

                        <Grid item xs={12}>
                            <Stack spacing={2} directions='row' xs={6}>
                            <Typography>
                                Correo: {this.props.email}
                            </Typography>
                            <Button variant="contained" xs={4} >Contained</Button>

                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                         <Typography>
                                Telefono: {this.props.phone}
                            </Typography>
                            <Button variant="contained" xs={4} >Contained</Button>
                        </Grid>
                        <Grid item xs={12}>
                         <Typography>
                                Contrasena: {this.props.password}
                            </Typography>
                            <Button variant="contained" xs={4} >Contained</Button>
                        </Grid>
                        <Grid item xs={12}>
                         <Typography>
                                Nombre: {this.props.name}
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                         <Typography>
                                Apellido: {this.props.lastname}
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                        <Button variant='contained'  startIcon={<RestaurantIcon/>} >
                            Mis recetas
                        </Button>
                        </Grid>

                        <Grid item xs={12}>
                        <Button variant='contained'  startIcon={<MessageIcon/>}>
                          Mis comentarios
                        </Button>
                        </Grid>


                    </Grid>

                    
                </Box>

            </Container>
    );
 }

}

ProfileBody.defaultProps={ 
    email:'usuario@hotmail.com', 
    name:'Antonio',
    password:'*****',
    phone:'1561234578',
    lastname:'Berti'
};

export default ProfileBody ;