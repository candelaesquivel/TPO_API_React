import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';


export function ProfileBody(props){

    const theme = useTheme();
    const isExtraSmallScreen = useMediaQuery(theme.breakpoints.up('xs'));

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
                        <Grid container item xs={12} sm={12} md={12} align='center' alignItems={'center'} justifyContent='center'>
                            <Grid item xs={2} sm={8} md={12}>
                                <AccountCircleIcon></AccountCircleIcon>
                                <Typography variant='h6'>Mi Perfil</Typography>
                            </Grid>
                        </Grid>

                        <Grid item xs={4} sm={4} md={6}>
                            <Typography align={isExtraSmallScreen ? 'center' : 'inherit'}>
                                Nombre: {props.values.name}
                            </Typography>
                        </Grid>
            
                        <Grid item xs={4} sm={4} md={6}>
                            <Button variant='contained' fullWidth marginTop={12} component={Link}  to='/modify-name'>Modificar</Button>
                        </Grid>

                        <Grid item xs={4} sm={4} md={6}>
                            <Typography align={isExtraSmallScreen ? 'center' : 'inherit'}>
                                Contraseña: *********
                            </Typography>
                        </Grid>

                        <Grid item xs={4} sm={4} md={6}>
                            <Button variant='contained' fullWidth paddingBottom={6} component={Link}  to ='/modify-password'>Modificar</Button>
                        </Grid>

                        <Grid item xs={4} sm={4} md={6}>
                            <Typography align={isExtraSmallScreen ? 'center' : 'inherit'}>
                                Apellido: {props.values.lastName}
                            </Typography>
                        </Grid>

                        <Grid item xs={4} sm={4} md={6}>
                            <Button variant='contained' fullWidth marginTop={12} component={Link} to='/modify-last-name'>Modificar</Button>
                        </Grid>

                        <Grid item xs={4} sm={4} md={6}>
                            <Typography align={isExtraSmallScreen ? 'center' : 'inherit'}>
                                Telefono: {props.values.phone}
                            </Typography>
                        </Grid>
                        
                        <Grid item xs={4} sm={4} md={6}>
                            <Button variant='contained' fullWidth marginTop={12} component={Link} to='/modify-phone'>Modificar</Button>
                        </Grid>


                        <Grid item xs={4} sm={8} md={12}>
                            <Typography align={isExtraSmallScreen ? 'center' : 'inherit'}>
                                Email: {props.values.email}
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