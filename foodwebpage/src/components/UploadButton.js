import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Input = styled('input')({
    display: 'none',
  });

export function UploadButton(props)
{
    return (
        <>
            <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                <Button variant="contained" component="span">
                    {props.text}
                </Button>
            </label>
        </>
    )
}