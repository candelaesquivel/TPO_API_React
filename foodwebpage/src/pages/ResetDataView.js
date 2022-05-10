import { Component } from "react";
import ResponsiveAppBar from "../components/Misc/ResponsiveNavBar";
import ResponsiveFooter from "../components/Footer/ResponsiveFooter";
import {ResetDataBody} from '../components/ResetData/ResetDataBody';


class ResetDataView extends Component{
    
    render(){
        return (
        <>
        <ResponsiveAppBar></ResponsiveAppBar>
        <ResetDataBody></ResetDataBody>
        <ResponsiveFooter></ResponsiveFooter>
        </>
        )
    }
}

export default ResetDataView;