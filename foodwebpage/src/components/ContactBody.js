import { Grid, ListItem, ListItemText, Typography } from "@mui/material";
import { Component } from "react";
import { Box } from "@mui/system";
import { List } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

function addressField(street, city, province){
    return (
        <ListItem>
            <ListItemText>
                {street} <br></br>
                {city} <br></br>
                {province} <br></br>
            </ListItemText>
        </ListItem>
    )
}

function inputTextField(autoComplete, fieldName, fieldLabel){
    return (
        <TextField
            autoComplete = {autoComplete}
            name = {fieldName}
            label = {fieldLabel}
            fullWidth
            required
        >
        </TextField>
    )
}

class ContactBody extends Component{
    render(){
        return (
            <Box sx={{ flexGrow: 1 }} component='body'>
                <Grid container justifyContent='center' p={3}>
                    <Grid item >
                        <img src='https://www.uade.edu.ar/media/wdflkrjm/1300x405.png'
                        style={{ height: "100%", width: "100%" }}
                        alt='contact-logo'
                        >
                        </img>
                    </Grid>
                </Grid>

                {/** Contenedor de Direcciones y formulario de contacto */}
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={4} md={4}>
                        <Typography variant='h4'>Nuestras Oficinas</Typography>
                        <List>
                            {addressField('Dorrego 946', 'Ciudad Autonoma de Buenos Aires')}
                            {addressField('Soler 541', 'Ciudad Autonoma de Buenos Aires')}
                            {addressField('Kennedy 160', 'La Plata', 'Provincia de Buenos Aires')}
                        </List>
                    </Grid>

                    {/** Dummy box para espacio sobrante */}

                    <Grid item sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} md={4}>
                    </Grid>

                    {/* Formulario de Contacto */}
                    <Grid item xs={4} sm={4} md={4}>
                        <Typography variant='h4' align="center">Formulario de Contacto</Typography>
                        <Box component="form" noValidate sx={{ mt: 3 }}>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
                                justifyItems='center'>
                                <Grid item xs={4} sm={8} md={12}>
                                    {inputTextField('given-name', 'Nombre', 'Nombre')}
                                </Grid>

                                <Grid item xs={4} sm={8} md={12}>
                                    {inputTextField('given-name', 'Apellido', 'Apellido')}
                                </Grid>

                                <Grid item xs={4} sm={8} md={12}>
                                    {inputTextField('given-name', 'Email', 'Correo Electronico')}
                                </Grid>

                                <Grid item xs={4} sm={8} md={12}>
                                    {inputTextField('given-name', 'Apellido', 'Telefono')}
                                </Grid>

                                <Grid item xs={12} lg={12}>
                                    <Button 
                                        sx={{mt:3, mb: 2}}
                                        variant='contained'
                                        fullWidth
                                        type='onSubmit'
                                        >
                                        Enviar</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export default ContactBody;