import { Component } from "react";
import { Button } from "@mui/material";
import { Dialog } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogActions } from "@mui/material";
import { DialogContentText } from "@mui/material";


class ResponsiveDialog extends Component{

    constructor(props){
        super(props)

        this.state = {
          isClosed : false
        }

        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleDialogOnClose = this.handleDialogOnClose.bind(this)
    }

    handleClickOpen(){
      this.setState(prevState => ({
        isClosed: !prevState.isClosed
      }));
    }

    handleDialogOnClose(){
      this.setState({
        isClosed : false
      })
    }

    render(){
        return (
            <>
              <Button 
                variant={this.props.buttonVariant} 
                onClick={this.handleClickOpen}
                color={this.props.buttonColor}
                >
                {this.props.buttonText}
              </Button>
              <Dialog onClose = {this.handleDialogOnClose} open={this.state.isClosed}>
                <DialogTitle>{this.props.messageTittle}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      {this.props.messageText}
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button variant={this.props.dialogExitButtonVariant}
                    onClick={this.handleDialogOnClose}
                    color={this.props.dialogExitButtonColor}
                    >{this.props.dialogOptionText} 
                    </Button>
                  </DialogActions>
              </Dialog>
              </>
          );
    }
}


ResponsiveDialog.defaultProps = {
  buttonVariant : 'contained',
  buttonText : "Button Text",
  buttonColor : 'primary',
  messageText : 'Message Text',
  messageTittle : 'Message Tittle',
  dialogOptionText : 'Dialog Option Text',
  dialogExitButtonVariant : 'contained'
};

export default ResponsiveDialog;