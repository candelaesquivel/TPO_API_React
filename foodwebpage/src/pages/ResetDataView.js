import { Component } from "react";
import ResponsiveAppBar from "../components/Misc/ResponsiveNavBar";
import ResponsiveFooter from "../components/Footer/ResponsiveFooter";
import {ResetDataBody} from '../components/ResetData/ResetDataBody';
import { useParams } from "react-router-dom";


export function ResetDataView(props){

    return (
        <>
        <ResponsiveAppBar></ResponsiveAppBar>
        <ResetDataBody title={props.title} inputLabel={props.inputLabel}></ResetDataBody>
        <ResponsiveFooter></ResponsiveFooter>
        </>
    )
}