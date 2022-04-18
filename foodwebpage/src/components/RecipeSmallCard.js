import { Component } from "react";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Button } from "@mui/material";
import { CardActions } from "@mui/material";
import { Link } from "react-router-dom";

class RecipeSmallCard extends Component{

    constructor(props){
        super(props)
        this.state ={
            recipeName : props.recipeName,
            recipeDescription : props.recipeDescription,
            recipeImage : props.recipeImage,
            linkToEdit : props.LinkToEdit
        }

        this.readMoreButton = this.readMoreButton.bind(this)
    }

    readMoreButton() {
        console.log(this.state.linkToEdit)
        
        if (this.state.linkToEdit){
            return (
                <Button size="medium" component={Link} to='#'>Leer Mas</Button>
            )
        }
        else{
            return (
                <Button size="medium" component={Link} to='Recetas'>Leer Mas</Button>
            )
        }
    }

    render(){
        return(
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {this.state.recipeName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {this.state.recipeDescription}
                    </Typography>
                </CardContent>
                <CardActions>
                    {this.readMoreButton()}
                </CardActions>
            </Card>
        )
    }

}

export default RecipeSmallCard;

