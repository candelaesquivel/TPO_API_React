import { Component } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { FormGroup } from "@mui/material";
import { Switch } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { FormHelperText } from "@mui/material";


import { CheckBoxList } from "../Misc/CheckBoxList";
import { UploadButton } from '../Misc/UploadButton';
import { categories } from "../../utilities/sharedData";
import DifficultyIndicator from './DifficultyIndicator';
import ResponsiveDialog from '../Misc/ResponsiveDialog';

class RecipeCreate extends Component {

    constructor(props){
        super(props);
        
        this.handleSwitchToggle = this.handleSwitchToggle.bind(this);

        this.state = {
            isPosted : false
        };
    }

    handleSwitchToggle(event) {
        
        const checked = event.target.checked;

        this.setState({
            isPosted : checked
        });
    }

    render(){

        let postedStr = "";
        if (this.state.isPosted)
            postedStr = "Publicada";
        else
            postedStr = "No publicada";

        return (
            <>
            <Grid 
                container 
                spacing={{ xs: 2, md: 3 }} 
                columns={{ xs: 4, sm: 8, md: 12 }} 
                p={12}
                direction='column'
            >
                <Grid item xs={4} sm={4} md={12}>
                    <TextField
                        required
                        fullWidth
                        id="recipe-name"
                        label="Nombre de la Receta"
                        name="recipe-name"
                        defaultValue=''
                    />
                </Grid>
                
                <Grid 
                    item
                    container 
                    spacing={{ xs: 2, md: 3 }} 
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    alignContent='center'
                    alignItems='center'
                    justifyContent='center'
                >
                    
                </Grid>

                <Grid item xs={4} sm={4} md={12}>
                    <UploadButton text='Subir Imagen'></UploadButton>
                </Grid>

                <Grid item xs={4} sm={4} md={12}>
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked={this.state.isPosted} onChange={this.handleSwitchToggle} />} label={postedStr} />
                    </FormGroup>
                    <FormHelperText>Presionar para que la receta se publique</FormHelperText>
                </Grid>

                <Grid item xs={4} sm={4} md={12}>
                    <Typography>Categorías</Typography>
                </Grid>

                <Grid container item xs={4} sm={4} md={4}>
                    <Grid item xs={4} sm={4} md={4}>
                        <CheckBoxList items = {categories.slice(0, 3)}>
                        </CheckBoxList>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <CheckBoxList items = {categories.slice(3, 6)}>
                        </CheckBoxList>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <CheckBoxList items = {categories.slice(6, 9)}>
                        </CheckBoxList>
                    </Grid>
                </Grid>
                <Grid item xs={4} sm={4} md={12}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Ingredientes (separados por comas)"
                        multiline
                        rows={4}
                        fullWidth
                        defaultValue=''
                    />
                </Grid>

                <Grid item xs={4} sm={4} md={12}>
                    <DifficultyIndicator disabled={false} difficultyValue=''></DifficultyIndicator>
                </Grid>

                <Grid item xs={4} sm={4} md={4}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Procedimiento"
                        multiline
                        rows={4}
                        fullWidth
                        defaultValue=""
                    />
                </Grid>

                <Grid item xs={4} sm={4} md={4}>
                    <Stack spacing={2} direction='row'>
                        <ResponsiveDialog 
                            buttonText={'Agregar Receta'}
                            messageTittle = ''
                            messageText='Receta Guardada Correctamente'
                            dialogOptionText = 'Salir'
                        >
                        </ResponsiveDialog>
                    </Stack>
                </Grid>
            </Grid>
            </>
        )
    }
}


export default RecipeCreate;