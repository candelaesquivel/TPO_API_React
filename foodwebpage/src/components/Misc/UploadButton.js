import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Input = styled('input')({
    display: 'none',
  });

export function UploadButton(props)
{
    const setImageData = props.setImageData

    const onFileUploaded = (event) => {
        event.preventDefault();

        const image = event.target.files[0];
        const maxSizeAllowed = 3.2 * (10 ** 6)

        if (image.size > maxSizeAllowed)
        {
            setImageData('')
            alert("La imagen supera el máximo de 3 MB")
            return;
        }
        else
        {
            setImageData(image);
            console.log(image)
        }
    }
    return (
        <>
            <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" 
                        type="file" onChange={onFileUploaded} name={props.name} />
                <Button variant="contained" component="span" >
                    {props.text}
                </Button>
            </label>
        </>
    )
}