import { Component } from "react";

import { ListItem } from "@mui/material";
import { List } from "@mui/material";
import { Divider } from "@mui/material";
import { ListItemText } from "@mui/material";
import { ListItemAvatar } from "@mui/material";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";

function generateComment(comment){
    return (
        <>
            <ListItem key={comment.id} alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="comment-avatar"/>
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <Typography>
                            {comment.name}
                        </Typography>
                    }
                    secondary={
                        <>
                        <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                        >
                            {comment.email}
                        </Typography>
                        {` - ${comment.body}`}
                        </>
                    }
                />
            </ListItem>
            <Divider></Divider>
        </>
    )
}

class Comments extends Component{

    constructor(props){
        super(props)
        this.state = {
            comments : props.comments
        }
    }

    render(){
        return (
            <>
                <List>
                {
                    this.state.comments.map(itr => generateComment(itr))
                }
                </List>
            </>
        )
    }
}

export default Comments;
  