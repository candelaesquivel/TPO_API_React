import { Component } from "react";
import Body from "../components/Body";
import Footer from "../components/Footer";
import NavBarHeader from "../components/NavBar";

class Home extends Component
{
    render(){
        return <div>
            <NavBarHeader></NavBarHeader>
                <p>Home</p>
                <Body></Body>
            <Footer></Footer>
        </div>
    }
}

export default Home