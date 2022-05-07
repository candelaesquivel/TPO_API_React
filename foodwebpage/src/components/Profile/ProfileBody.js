import { Typography } from "@mui/material";
import { Component } from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";


class ProfileBody extends Component{
   
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
                    <Grid container item spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid container item xs={4} sm={8} md={12}>
                            <Grid item xs={4} sm={8} md={12} align='center'>
                                <AccountCircleIcon></AccountCircleIcon>

                            </Grid>
                            <Grid item xs={4} sm={8} md={12} align='center'>
                                <Typography variant='h6'>Mi Perfil</Typography>
                            </Grid>
                        </Grid>

                        <Grid item xs={4} sm={8} md={6}>
                            <Typography>
                                Nombre: {this.props.name}
                            </Typography>
                        </Grid>
            
                        <Grid item xs={4} sm={8} md={6}>
                            <Button variant='contained' xs={4} marginTop={12}>Modificar</Button>
                        </Grid>

                        <Grid item xs={4} sm={8} md={6}>
                            <Typography>
                                Contraseña: {this.props.password}
                            </Typography>
                        </Grid>

                        <Grid item xs={4} sm={8} md={6}>
                            <Button variant='contained' xs={4} paddingBotton={6} component={Link} to ='/ChangePassword'>Modificar</Button>
                        </Grid>

                        <Grid item xs={4} sm={8} md={6}>
                            <Typography>
                                Apellido: {this.props.lastname}
                            </Typography>
                        </Grid>

                        <Grid item xs={4} sm={8} md={12}>
                            <Typography>
                                Email: {this.props.email}
                            </Typography>
                        </Grid>

                        <Grid item xs={4} sm={8} md={12}>
                            <Typography>
                                Telefono: {this.props.phone}
                            </Typography>
                        </Grid>
                            
                     
                        <Grid item xs={4} sm={8} md={12}>
                            <Button fullWidth variant='contained'  startIcon={<RestaurantIcon/>} 
                                component={Link} to='/my-recipes'>
                                Mis recetas
                            </Button>
                        </Grid>

                   </Grid>
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