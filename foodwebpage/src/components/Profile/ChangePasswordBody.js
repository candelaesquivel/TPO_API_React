import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import React, { useEffect, useState} from 'react';
import {useNavigate } from "react-router-dom";
import { isValidPassword } from "../../utilities/stringFunctions";
import { getUserEmail, getUserLastName, getUserName, getUserPhone } from "../../utilities/UserSession";
import { updateUserPassword as UpdatePasswordController } from "../../controllers/MyAppController";


export function ChangePasswordBody(props){
        
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmNewPassword] = useState('')

    const [currPassErrorMsg, setCurrPasssErrorMsg] = useState('');
    const [newPassErrorMsg, setNewPassErrorMsg] = useState('');
    const [repeatNewPassErrorMsg, setRepeatPasswordErrorMsg] = useState('')

    const [currPassErrorState, setCurrPasssErrorState] = useState(false)
    const [newPassErrorState, setNewPassErrorState] = useState(false)
    const [repeatNewPassErrorState, setRepeatPasswordErrorState] = useState(false)

    const [errorMsg, setErrorMsg] = useState('')

    const navigate = useNavigate();

    const onConfirmPasswordChange = (event) => {
        setConfirmNewPassword(event.target.value);
        setRepeatPasswordErrorMsg('')
        setRepeatPasswordErrorState(false)
    }

    const onNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
        setNewPassErrorMsg('')
        setNewPassErrorState(false)
    }

    const onCurrentPassChange = (event) => {
        setCurrentPassword(event.target.value);
        setCurrPasssErrorMsg('')
        setCurrPasssErrorState(false);
    }

    const updatePassword = async function ()  {

        var userData = {
            currentPassword : currentPassword,
            email : getUserEmail(),
            newPassword : newPassword,
        }

        let result = await UpdatePasswordController(userData)
        console.log("Response: ", result);

        if (result.rdo === 0){
            navigate('/password-updated');
        }
        else if (result.rdo === 400){
            setCurrPasssErrorState(true);
            setCurrPasssErrorMsg(result.mensaje)
        }
    }

    const onSubmitData = (event) => {

        if (!isValidPassword(newPassword))
        {
            setNewPassErrorState(true)
            setNewPassErrorMsg('Contraseña no valida, se requieren al menos 7 caracteres y debe contener al menos 1 letra y 1 un numero')
            event.preventDefault();
            return;
        }

        if (newPassword !== confirmPassword){
            setRepeatPasswordErrorState(true)
            setRepeatPasswordErrorMsg('Las contraseñas no son iguales')
            event.preventDefault();
            return;
        }
        
        // Backend Validation
        updatePassword()
        event.preventDefault();
    }

    return(
        <Container component='main' maxWidth='xs'>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
            </Box>

            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <ChangeCircleIcon/>
            </Avatar>

            <Typography variant='h6'>
                Cambiar Contraseña 
            </Typography>

            <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={onSubmitData}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md:12}}>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        id="current-password"
                        label="Contraseña Actual"
                        name="current-password"
                        type='password'
                        onChange={onCurrentPassChange}
                        error = {currPassErrorState}
                        helperText = {currPassErrorMsg}
                        autoComplete
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        name="ContraseñaNueva"
                        label="Contraseña Nueva"
                        type="password"
                        id="new-password"
                        onChange={onNewPasswordChange}
                        error={newPassErrorState}
                        helperText={newPassErrorMsg}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        name="ContraseñaNueva2"
                        label="Repita la Contraseña Nueva"
                        type="password"
                        id="confirm-new-password"
                        onChange={onConfirmPasswordChange}
                        error={repeatNewPassErrorState}
                        helperText={repeatNewPassErrorMsg}
                        />
                    </Grid>


                    <Grid item xs={12}>
                        <Button 
                            sx={{mt:3, mb: 2}}
                            variant='contained'
                            fullWidth
                            type='submit'
                            >
                            Cambiar</Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}