import { Component } from "react";
import ResponsiveFooter from "../components/ResponsiveFooter";
import ResponsiveAppBar from "../components/ResponsiveNavBar";
import AboutUsBody from "../components/AboutUsBody";

class AboutUsPage extends Component{
    
    render(){
        return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <AboutUsBody></AboutUsBody>
            <ResponsiveFooter></ResponsiveFooter>
        </>
        )
    }
}

export default AboutUsPage;