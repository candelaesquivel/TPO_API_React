
import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import PasswordIcon from '@mui/icons-material/Password';


export function ResetDataBody(props){
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

                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <PasswordIcon/>
                </Avatar>
                <Typography variant='h6'>
                    demo
                </Typography>

                <Box component="form" noValidate sx={{ mt: 3 }} >
                    <Grid container spacing={2}>
                    
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="name"
                            label='demo'
                            name="name"
                            autoComplete="name"
                            />
                        </Grid>

                       

                        <Grid item xs={12} sm={6}>
                            <Button 
                                sx={{mt:3, mb: 2}}
                                variant='contained'
                                fullWidth
                                type='onSubmit'
                                
                                >
                                Modificar</Button>
                        </Grid>
            
                    </Grid>
                </Box>

            </Container>
        );
}