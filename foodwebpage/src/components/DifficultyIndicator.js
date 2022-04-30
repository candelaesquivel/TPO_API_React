import { Typography } from "@mui/material";
import { Component } from "react";
import { Slider } from "@mui/material";

class DifficultyIndicator extends Component{
    
    render(){
        const valueLabels = [
            { value : 1, label : '1' },
            { value : 2, label : '2' },
            { value : 3, label : '3' },
            { value : 4, label : '4' },
            { value : 5, label : '5' },
        ];

        return (
            <>
                <Typography>Dificultad: </Typography>
                <Slider
                    aria-label="difficulty-marks"
                    defaultValue={this.props.difficultyValue}
                    step={1}
                    valueLabelDisplay="auto"
                    marks={valueLabels}
                    max={5}
                    min={1}
                    disabled={this.props.disabled}
                    size={'small'}
                />
            </>
        )
    }
}

export default DifficultyIndicator;