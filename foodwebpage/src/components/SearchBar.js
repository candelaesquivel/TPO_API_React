import { Component } from "react";
import { Button, IconButton, TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { Rating } from "@mui/material";
import { Typography } from "@mui/material";

import AdjustIcon from '@mui/icons-material/Adjust';
import SearchIcon from '@mui/icons-material/Search';

class SearchBar extends Component{
    
    render(){
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
                            />
                    </Grid>

                    <Grid item xs={4} sm={8} md={6}>
                        <TextField
                                id="standard-search"
                                label="Ingredientes"
                                type="search"
                                variant="standard"
                                fullWidth
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
                        />
                    </Grid>

                    <Grid item xs={4} sm={8} md={6}>
                        <>Empty</>
                    </Grid>

                    <Grid item xs={4} sm={8} md={6}>
                        <Button variant="contained" startIcon={<SearchIcon />}>
                            Buscar
                        </Button>
                    </Grid>
            </Grid>
        )
    }
}


export default SearchBar;