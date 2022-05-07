import { Component } from "react";
import ResponsiveFooter from "../components/Footer/ResponsiveFooter";
import ResponsiveAppBar from "../components/Misc/ResponsiveNavBar";
import ProfileRecipesBody from "../components/Profile/ProfileRecipesBody";

class ProfileRecipesPage extends Component{

    render(){
        return (
            <>
                <ResponsiveAppBar></ResponsiveAppBar>
                <ProfileRecipesBody></ProfileRecipesBody>
                <ResponsiveFooter></ResponsiveFooter>
            </>
        )
    }
}

export default ProfileRecipesPage;