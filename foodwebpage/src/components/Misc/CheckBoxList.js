import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { Checkbox } from "@mui/material";

export function CheckBoxList(props)
{
    return (
        <List sx={{ width: 'auto', maxWidth: 360, bgcolor: 'background.paper', 
        overflow : props.overflow , maxHeight : props.maxHeight }}>
        {
            props.items.map(itr => 
                <ListItem>
                    <ListItemIcon>
                        <Checkbox>
                        </Checkbox>
                    </ListItemIcon>
                    <ListItemText>{itr}</ListItemText>
                </ListItem>
            )
        }
        </List>
    )
}