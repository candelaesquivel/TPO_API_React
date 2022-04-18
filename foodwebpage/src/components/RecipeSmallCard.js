import { Component } from "react";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Button } from "@mui/material";
import { CardActions } from "@mui/material";
import { Link } from "react-router-dom";

import { faker } from '@faker-js/faker';


class RecipeSmallCard extends Component{
    render(){
        return(
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={this.props.imgSrc}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {this.props.recipeName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {this.props.recipeDescription}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button 
                        size="medium" 
                        component={Link} to={this.props.readMoreLink}>
                        Leer Mas
                    </Button>
                </CardActions>
            </Card>
        )
    }
}

export default RecipeSmallCard;

