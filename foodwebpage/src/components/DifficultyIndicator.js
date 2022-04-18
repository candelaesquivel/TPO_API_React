import { Typography } from "@mui/material";
import { Component } from "react";
import { Slider } from "@mui/material";

class DifficultyIndicator extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            disabled : props.disabled,
            difficultyValue : props.difficultyValue
        }
    }


    render(){
        const valueLabels = [
            { value : 1, label : '1' },
            { value : 2, label : '2' },
            { value : 3, label : '3' },
            { value : 4, label : '4' },
            { value : 5, label : '5' },
            { value : 6, label : '6' },
            { value : 7, label : '7' },
            { value : 8, label : '8' },
            { value : 9, label : '9' },
            { value : 10, label : '10' }
        ]

        return (
            <>
                <Typography>Dificultad: </Typography>
                <Slider
                    aria-label="Custom marks"
                    defaultValue={this.state.difficultyValue}
                    step={1}
                    valueLabelDisplay="auto"
                    marks={valueLabels}
                    max={10}
                    min={1}
                    disabled={this.props.disabled}
                    size={'small'}
                />
            </>
        )
    }
}

export default DifficultyIndicator;