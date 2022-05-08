import { Button, TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { Rating } from "@mui/material";
import { Typography } from "@mui/material";

import AdjustIcon from '@mui/icons-material/Adjust';
import SearchIcon from '@mui/icons-material/Search';

export function SearchBar(props){
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4} sm={8} md={12}>
                    <Typography variant='h6'>Buscador de Recetas</Typography>
                </Grid>

                <Grid item xs={4} sm={8} md={6}>
                    <TextField
                            id="standard-search"
                            label="Nombre"
                            type="search"
                            variant="standard"
                            fullWidth
                            onChange={props.onNameChange}
                        />
                </Grid>

                <Grid item xs={4} sm={8} md={6}>
                    <TextField
                            id="standard-search"
                            label="Ingredientes"
                            type="search"
                            variant="standard"
                            fullWidth
                            onChange={props.onIngredientChange}
                        />
                </Grid>

                <Grid item xs={4} sm={8} md={6}>
                    <TextField
                            id="standard-search"
                            label="Categorias"
                            type="search"
                            variant="standard"
                            fullWidth
                        />
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

                <Grid item xs={4} sm={8} md={6}>
                    <Button variant="contained" startIcon={<SearchIcon />}>
                        Buscar
                    </Button>
                </Grid>
        </Grid>
    )
}