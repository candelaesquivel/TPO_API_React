import { Component } from "react";
import { Typography } from "@mui/material";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import centerBox from "./CenterBox";

class FooterSection extends Component{
    
    constructor(props){
        super(props)
        this.state={
            sectionItems : props.sectionItems,
            sectionTittle : props.sectionTittle
        }
    }
    
    render(){
        return(
            <Grid item xs={4} sm={4} md={4} >
                <Typography variant="h6" component="div">
                    {this.state.sectionTittle}
                </Typography>
                {
                    centerBox(
                        <List>
                        {
                            this.state.sectionItems.map( itr => (
                                <ListItem button component={Link} to='/'>
                                    <ListItemIcon>{itr.Icon}</ListItemIcon>
                                    <ListItemText primary={itr.Text}></ListItemText>
                                </ListItem>
                            ))
                        }
                    </List>
                    )
                }
                    
            </Grid>
        )
    }
}

export default FooterSection;