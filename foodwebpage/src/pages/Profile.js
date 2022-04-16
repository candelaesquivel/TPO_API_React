import { Component } from "react";
import NavBarHeader from "../components/NavBar";
import Footer from "../components/Footer";

class Profile extends Component{
    render(){
        return (
            <div>
                <NavBarHeader></NavBarHeader>
                <p>Profile</p>
                <Footer></Footer>
            </div>
        )
    }
}

export default Profile;