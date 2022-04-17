import { Grid, ListItem, ListItemText, Typography } from "@mui/material";
import { Component } from "react";
import { Box } from "@mui/system";
import { List } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Container } from "@mui/material";

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
                        >
                        </img>
                    </Grid>
                </Grid>
                <Grid container spacing={{ xs: 2, md: 3 }} p={12}
                direction='row'>
                    <Grid item xs={12} lg={8}>
                        <Typography variant='h4'>Nuestras Oficinas</Typography>
                        <List>
                            {addressField('Dorrego 946', 'Ciudad Autonoma de Buenos Aires')}
                            {addressField('Soler 541', 'Ciudad Autonoma de Buenos Aires')}
                            {addressField('Kennedy 160', 'La Plata', 'Provincia de Buenos Aires')}
                        </List>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Typography variant='h4' align="center">Formulario de Contacto</Typography>
                        <Box component="form" noValidate sx={{ mt: 3 }}>
                            <Grid container spacing={2} >
                                <Grid item xs={12} lg={8} xl={12}>
                                    {inputTextField('given-name', 'Nombre', 'Nombre')}
                                </Grid>

                                <Grid item xs={12} lg={8} xl={12}>
                                    {inputTextField('given-name', 'Apellido', 'Apellido')}
                                </Grid>

                                <Grid item xs={12} lg={8} xl={12}>
                                    {inputTextField('given-name', 'Email', 'Correo Electronico')}
                                </Grid>

                                <Grid item xs={12} lg={8} xl={12}>
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