import { Component } from "react";
import ResponsiveAppBar from "../components/Misc/ResponsiveNavBar";
import ResponsiveBody from "../components/Home/ResponsiveBody";
import ResponsiveFooter from "../components/Footer/ResponsiveFooter";

class Home extends Component
{
    render(){
        return (
            <>
                <ResponsiveAppBar></ResponsiveAppBar>
                <ResponsiveBody></ResponsiveBody>
                <ResponsiveFooter></ResponsiveFooter>
            </>
        );    
    }
}

export default Home