import { Component } from "react";
import Footer from "../components/Footer";
import NavBarHeader from "../components/NavBar";

class Recipes extends Component{
    render(){
        return (
            <div>
                <NavBarHeader></NavBarHeader>
                <p>Recipes</p>
                <Footer></Footer>
            </div>
        )
    }
}

export default Recipes;