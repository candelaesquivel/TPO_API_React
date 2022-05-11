import ResponsiveAppBar from "../components/Misc/ResponsiveNavBar";
import ResponsiveFooter from "../components/Footer/ResponsiveFooter";
import {ResetDataBody} from '../components/ResetData/ResetDataBody';


export function ModifyProfileDataView(props){

    return (
        <>
        <ResponsiveAppBar></ResponsiveAppBar>
        <ResetDataBody title={props.title} inputLabel={props.inputLabel}></ResetDataBody>
        <ResponsiveFooter></ResponsiveFooter>
        </>
    )
}