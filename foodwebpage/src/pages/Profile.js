import { Component } from "react";
import ResponsiveAppBar from "../components/ResponsiveNavBar";
import ResponsiveFooter from "../components/ResponsiveFooter";

class Profile extends Component{
    render(){
        return (
            <div>
                <ResponsiveAppBar></ResponsiveAppBar>
                <ResponsiveFooter></ResponsiveFooter>
            </div>
        )
    }
}

export default Profile;