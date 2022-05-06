import { Grid, Typography } from "@mui/material";
import { Component } from "react";
import { Box } from "@mui/system";

class AboutUsBody extends Component{
    render(){
        return (
            <Box sx={{ flexGrow: 1 }} component='body'>
                <Grid container justifyContent='center' p={3}>
                    <Grid item >
                        <img src='/assets/img/comidas-rapidas.jpg'
                        style={{ height: "100%", width: "100%" }}
                        alt='about_us'
                        >
                        </img>
                    </Grid>
                </Grid>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={8} md={12}>

                        <Typography variant='h4' align='center' paddingTop={4}>Sobre Nosotros</Typography>

                        <Typography variant='h6' align='justify'>
                        <br/><br/>Somos la página “Food”, nuestro objetivo es llegar a ser la mejor página de recetas de comidas. 
                        Aquí se pueden subir recetas de todo tipo tanto veganas, vegetarianas y no vegetarianas.
                        Podrán registrarse para crear su usuario y así poder explotar al máximo el sitio. 
                        Una vez registrado, podrán subir o crear o modificar un borrador de una receta,
                        eliminar alguna receta, comentar o calificar las recetas de otros usuarios. 
                        Los invitados del sitio podrán visualizar en la página de inicio todas las recetas publicadas, 
                        pero no podrán comentar o calificar. 
                        </Typography>
                    </Grid>


                   
                </Grid>
            </Box>
        )
    }
}

export default AboutUsBody;