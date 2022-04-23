import { Component } from "react";
import ResponsiveAppBar from "../components/ResponsiveNavBar";
import ResponsiveFooter from "../components/ResponsiveFooter";
import ProfileBody from "../components/ProfileBody";

class Profile extends Component{
    render(){
        return (
            <div>
                <ResponsiveAppBar></ResponsiveAppBar>
                <ProfileBody></ProfileBody>
                <ResponsiveFooter></ResponsiveFooter>
            </div>
        )
    }
}

export default Profile;