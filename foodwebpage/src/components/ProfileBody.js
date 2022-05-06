import { Typography } from "@mui/material";
import { Component } from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


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

               <AccountCircleIcon></AccountCircleIcon>
                <Typography variant='h6'>
                    Mi Perfil
                </Typography>

                

                <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={this.handleOnSubmit}>
                    <Grid container spacing={2}>

                        <Grid container item xs={12} spacing={2}>
                            <Grid item>
                            <Typography>
                                Correo: {this.props.email}
                            </Typography>
                            </Grid>
                            <Grid item>
                            <Button variant="text" xs={4} paddingBotton={6}>Modificar</Button>
                            </Grid>

                        </Grid>

                        <Grid container item xs={12} spacing={2}>
                            <Grid item>
                            <Typography>
                            Contrasena: {this.props.password}
                            </Typography>
                            </Grid>
                            <Grid item>
                            <Button variant="text" xs={4} paddingBotton={6}>Modificar</Button>
                            </Grid>

                        </Grid>
                       
                        <Grid container item xs={12} spacing={2}>
                            <Grid item>
                            <Typography>
                            Nombre: {this.props.name}
                            </Typography>
                            </Grid>
                            <Grid item>
                            <Button variant="text" xs={4} paddingBotton={6}>Modificar</Button>
                            </Grid>

                        </Grid>
                        
                        <Grid container item xs={12} spacing={2}>
                            <Grid item>
                            <Typography>
                            Apellido: {this.props.lastname}
                            </Typography>
                            </Grid>
                            <Grid item>
                            <Button variant="text" xs={4} paddingBotton={6}>Modificar</Button>
                            </Grid>

                        </Grid>

                        <Grid container item xs={12} spacing={2}>
                            <Grid item>
                            <Typography>
                            Telefono: {this.props.phone}
                            </Typography>
                            </Grid>
                            <Grid item>
                            <Button variant="text" xs={4} paddingBotton={6}>Modificar</Button>
                            </Grid>

                        </Grid>
                            
                     
                        <Grid item xs={12}>
                        <Button fullWidth variant='contained'  startIcon={<RestaurantIcon/>} >
                            Mis recetas
                        </Button>
                        </Grid>

                        <Grid item xs={12} >
                        <Button fullWidth variant='contained'  startIcon={<MessageIcon/>}>
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