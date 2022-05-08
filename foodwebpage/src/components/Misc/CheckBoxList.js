import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { Checkbox } from "@mui/material";

export function CheckBoxList(props)
{
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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