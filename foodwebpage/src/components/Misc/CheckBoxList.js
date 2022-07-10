import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { Checkbox } from "@mui/material";
import { useState } from "react";

export function CheckBoxList(props)
{
    return (
        <List sx={{ width: 'auto', maxWidth: 360, bgcolor: 'background.paper', 
        overflow : props.overflow , maxHeight : props.maxHeight }}>
        {
            props.items.map((itr, index) => 
                <ListItem>
                    <ListItemIcon>
                        <Checkbox
                            id = {index + props.category_col} 
                            onChange= {props.onChecked}
                        >
                        </Checkbox>
                    </ListItemIcon>
                    <ListItemText>{itr}</ListItemText>
                </ListItem>
            )
        }
        </List>
    )
}