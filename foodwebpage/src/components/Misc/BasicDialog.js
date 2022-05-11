import { Dialog } from "@mui/material"
import { DialogActions } from "@mui/material"
import { Button } from "@mui/material"
import { DialogContent } from "@mui/material"
import { DialogTitle } from "@mui/material"
import { DialogContentText } from "@mui/material"

export function BasicDialog(props){
    return (
        <Dialog open={props.open}>
            <DialogTitle></DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    {props.dialogContentText}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' onClick={props.onExitButtonPressed}
                    >Salir
                    </Button>
                </DialogActions>
        </Dialog>
    )
}