import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { Checkbox } from "@mui/material";

export function CheckBoxList(props)
{
    const hasSelected = props.markedItems !== undefined
    const markedItems = props.markedItems
    console.log("Props: ", hasSelected)
    return (
        <List sx={{ width: 'auto', maxWidth: 360, bgcolor: 'background.paper', 
        overflow : props.overflow , maxHeight : props.maxHeight }}>
        {
            props.items.map((itr, index) => 
            {
                const checked = hasSelected && markedItems.includes(itr)
                return (
                <ListItem>
                    <ListItemIcon>
                        <Checkbox
                            id = {index + props.category_col} 
                            onChange= {props.onChecked}
                            defaultChecked={checked}
                        >
                        </Checkbox>
                    </ListItemIcon>
                    <ListItemText>{itr}</ListItemText>
                </ListItem>
                )
            })
        }
        </List>
    )
}