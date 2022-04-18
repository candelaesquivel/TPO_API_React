import { Component } from "react";
import { TextField } from "@mui/material";

class CommentTextField extends Component{
    render(){
        return (
            <>
                <TextField
                    id="outlined-multiline-static"
                    label="Comentario"
                    multiline
                    rows={4}
                    fullWidth
                    defaultValue="Escriba su comentario aqui"
                />
            </>
        )
    }
}

export default CommentTextField;