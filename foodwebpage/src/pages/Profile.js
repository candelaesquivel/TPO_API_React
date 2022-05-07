import { Component } from "react";
import ResponsiveAppBar from '../components/Misc/ResponsiveNavBar';
import ResponsiveFooter from "../components/Footer/ResponsiveFooter";
import ProfileBody from '../components/Profile/ProfileBody';

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