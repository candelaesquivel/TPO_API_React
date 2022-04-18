import { Component } from "react";
import ResponsiveFooter from "../components/ResponsiveFooter";
import ResponsiveAppBar from "../components/ResponsiveNavBar";
import ProfileRecipesBody from "../components/ProfileRecipesBody";

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