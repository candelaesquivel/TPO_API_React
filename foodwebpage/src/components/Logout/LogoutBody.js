import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export function LogoutBody(props){

    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} p={12}>
            <Grid item xs={4} sm={8} md={12}>
                <Typography variant='h4' align="center">Se ha cerrado la sesión correctamente, en breve sera redirigido
                a la página principal</Typography>
            </Grid>
        </Grid>
    )
}