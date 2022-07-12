import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { Rating } from "@mui/material";
import { Typography } from "@mui/material";

import AdjustIcon from '@mui/icons-material/Adjust';

import {CheckboxesTags} from "../Misc/AutoCompleteWithCheckBoxes";
import {categories} from '../../utilities/sharedData';

export function SearchBar(props){
    return (
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4} sm={8} md={12}>
                    <Typography variant='h6'>Buscador de Recetas</Typography>
                </Grid>

                <Grid item xs={4} sm={8} md={6}>
                    <TextField
                            id="standard-search"
                            label="Nombre"
                            type="search"
                            variant="outlined"
                            fullWidth
                            onChange={props.onNameChange}
                        />
                </Grid>

                <Grid item xs={4} sm={8} md={6}>
                    <TextField
                            id="standard-search"
                            label="Ingredientes (separar por comas)"
                            type="search"
                            variant="outlined"
                            fullWidth
                            onChange={props.onIngredientChange}
                        />
                </Grid>

                <Grid item xs={4} sm={8} md={6}>
                    <CheckboxesTags 
                        options = {categories} 
                        onCheckBoxTagOnChange={props.onCategoryChange}
                        placeholder='Categorías'
                    >
                        
                    </CheckboxesTags>
                </Grid>

                <Grid item xs={4} sm={8} md={6}>
                    <Typography component="legend">Dificultad</Typography>
                    <Rating
                        name="simple-controlled"
                        icon={<AdjustIcon fontSize="inherit" />}
                        emptyIcon={<AdjustIcon fontSize="inherit" />}
                        onChange={props.onDifficultChange}
                    />
                </Grid>

                <Grid item xs={4} sm={8} md={6}>
                    <></>
                </Grid>
        </Grid>
    )
}