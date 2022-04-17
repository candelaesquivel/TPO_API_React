import { Typography } from "@mui/material";
import { Component } from "react";
import { Grid } from "@mui/material";
import Comments from "./Comment";
import BurgerImage from "../assets/img/burger.jpg"

const commentsItems = [
    {'id' : 0, 'name' : 'Pedrito', 'email' : 'pedrito@gmail.com', 'body' : 'Hola'},
    {'id' : 1, 'name' : 'Pablo', 'email' : 'pablo@gmail.com', 'body' : 'Medio'},
    {'id' : 2, 'name' : 'Marco', 'email' : 'marco@gmail.com', 'body' : 'Adios'},
]

class RecipeBody extends Component{
    
    render(){
        return (
            <Grid 
                container 
                spacing={{ xs: 2, md: 3 }} 
                columns={{ xs: 4, sm: 8, md: 12 }} 
                p={12}
                direction='column'
            >
                
                <Grid 
                    item
                    container 
                    spacing={{ xs: 2, md: 3 }} 
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    alignContent='center'
                    alignItems='center'
                    justifyContent='center'
                >
                    <Grid item xs={4} sm={8} md={12}>
                        <img src={BurgerImage}
                        style={{ height: "1%", width: "100%" }}
                        alt='recipe-img'
                        >
                        </img>
                    </Grid>
                </Grid>
                
                <Grid item xs={4} sm={4} md={4}>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </Grid>

                <Grid item xs={4} sm={4} md={4}>
                    <Typography>
                        Comentarios
                    </Typography>
                    <Comments comments={commentsItems}></Comments>
                </Grid>
            </Grid>
        )
    }
}

export default RecipeBody;