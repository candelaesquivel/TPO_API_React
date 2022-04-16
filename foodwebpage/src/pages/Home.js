import { Component } from "react";
import ResponsiveAppBar from "../components/ResponsiveNavBar";
import ResponsiveBody from "../components/ResponsiveBody";
import ResponsiveFooter from "../components/ResponsiveFooter";

class Home extends Component
{
    render(){
        return <div>
            <ResponsiveAppBar></ResponsiveAppBar>
            <ResponsiveBody></ResponsiveBody>
            <ResponsiveFooter></ResponsiveFooter>
        </div>
    }
}

export default Home