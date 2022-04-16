import { Component } from "react";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

class SearchBar extends Component{
    

    
    render(){
        return (
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
                alignContent='center' direction='row' justifyContent='center'>
                <Grid item xs={2} sm={4} md={8}>
                    <Box
                        sx={{
                            flexGrow : 0,
                            maxWidth: '100%',
                        }}
                        
                        >
                        <TextField 
                            margin='normal' 
                            fullWidth 
                            label=''
                            placeholder="Buscador de Recetas" 
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <SearchIcon />
                                  </InputAdornment>
                                ),
                              }}
                        >

                        </TextField>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}


export default SearchBar;