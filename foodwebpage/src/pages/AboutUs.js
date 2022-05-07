import { Component } from "react";
import ResponsiveAppBar from '../components/Misc/ResponsiveNavBar';
import ResponsiveFooter from '../components/Footer/ResponsiveFooter';
import AboutUsBody from '../components/AboutUs/AboutUsBody';

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