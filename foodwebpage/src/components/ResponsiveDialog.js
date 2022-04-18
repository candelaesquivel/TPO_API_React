import { Component } from "react";
import { Button } from "@mui/material";
import { Dialog } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogActions } from "@mui/material";
import { Link } from "react-router-dom";
import { DialogContentText } from "@mui/material";


class ResponsiveDialog extends Component{

    constructor(props){
        super(props)
        this.state ={
            buttonText : props.buttonText,
            messageTittle : props.messageTittle,
            messageText : props.messageText,
            agreeLink : props.agreeLink,
        }
    }

    render(){

        const handleClickOpen = () => {
          };
        
          const handleClose = () => {
          };

        return (
            <>
              <Button variant="contained" onClick={handleClickOpen}>
                {this.state.buttonText}
              </Button>
              <Dialog
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
              >
                <DialogTitle id="responsive-dialog-title">
                  {this.state.messageTittle}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    {this.state.messageText}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleClose}>
                    Cancelar
                  </Button>
                  <Button onClick={handleClose} component={Link} to={this.agreeLink} autoFocus>
                    Logear
                  </Button>
                </DialogActions>
              </Dialog>
              </>
          );
    }
}

export default ResponsiveDialog;