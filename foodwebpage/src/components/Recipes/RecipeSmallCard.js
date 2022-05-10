import { Component } from "react";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Button } from "@mui/material";
import { CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import { Stack } from "@mui/material";

class RecipeSmallCard extends Component{

    render()
    {
        return(
            <Card sx={{ maxWidth: 345, width : 'auto'}}>
                <CardMedia
                    component="img"
                    height="140"
                    image={this.props.imgsrc}
                    alt="recipe-card"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {this.props.recipeName}
                    </Typography>
                    <Typography variant="body2">
                        Dificultad: {this.props.recipeDifficulty}
                    </Typography>
                    <Stack 
                        direction={{xs : 'column', md : 'row'}} 
                        spacing={{xs: 1, md : 2}}
                    >
                        <Typography variant='body2'>
                            Calificación
                        </Typography>
                        <Rating value={this.props.recipeRanking} readOnly>
                        </Rating>
                    </Stack>
                    
                </CardContent>
                <CardActions>
                    <Button 
                        size="medium"
                        component={Link}
                        to={`/${this.props.readMoreLink}/${this.props.recipeId}`}
                        variant='contained'>
                        Leer Mas
                    </Button>
                </CardActions>
            </Card>
        )
    }
}

export default RecipeSmallCard;

