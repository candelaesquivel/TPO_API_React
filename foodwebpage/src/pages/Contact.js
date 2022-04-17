import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { Component } from "react";
import ResponsiveFooter from "../components/ResponsiveFooter";
import ResponsiveAppBar from "../components/ResponsiveNavBar";
import ContactBody from "../components/ContactBody"

class ContactPage extends Component{
    
    render(){
        return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <ContactBody></ContactBody>
            <ResponsiveFooter></ResponsiveFooter>
        </>
        )
    }
}

export default ContactPage;