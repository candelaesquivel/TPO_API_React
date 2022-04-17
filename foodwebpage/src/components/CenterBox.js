import { Box } from "@mui/system";

export default function centerBox(element){
    return <Box 
        display="flex" 
        alignItems="center"
        justifyContent="center"
    >
        {element}
    </Box>  
}