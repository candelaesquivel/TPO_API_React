import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import PasswordIcon from '@mui/icons-material/Password';
import React, {useState } from 'react';
import { useNavigate} from "react-router-dom";

import { isValidEmailWithRegex } from "../../utilities/stringFunctions";
import {recoveryPasswordQuestion as GetRecoveryQuestion} from '../../controllers/MyAppController';
import {recoveryPasswordAnswer as ValidateAnswerBack} from '../../controllers/MyAppController';
import {validateSecurityAnswerSyntax} from '../../utilities/ValidateHandlers';
import { isValidPassword } from "../../utilities/stringFunctions";
import { updatePasswordFromRecovery } from "../../controllers/MyAppController";

const NewPasswordField = (props) => {
    return (
        <Grid item xs={12}>
            <TextField
                required
                fullWidth
                name={props.name}
                label={props.label}
                type="password"
                id={props.name}
                onChange={props.onChange}
                helperText = {props.helperText}
                error = {props.error}
            />
        </Grid>
    )
}

export function ResetPasswordBody(props){

        const [emailInput, setEmailInput] = useState('');
        const [isValidEmail, setValidEmail] = useState(true);
        const [emailErrorMsg, setEmailErrorMsg] = useState('');

        const [answerInput, setAnswerInput] = useState('');
        const [isValidAnswer, setValidAnswer] = useState(true);
        const [answerErrorMsg, setAnswerErrorMsg] = useState('');

        const [securityQuestion, setSecurityQuestion] = useState('');
        const [showQuestion, setShowQuestion] = useState(false);

        const [newPassword, setNewPassword] = useState('');
        const [newPasswordErrorState, setNewPasswordErrorState] = useState(false);
        const [newPasswordErrorMsg, setNewPasswordErrorMsg] = useState('');

        const [confirmPassword, setConfirmPassword] = useState('');
        const [confirmPasswordErrorState, setConfirmPasswordErrorState] = useState(false);
        const [confirmPasswordErrorMsg, setConfirmPasswordErrorMsg] = useState('');

        const [showNewPasswordField, setShowNewPassword] = useState(false);

        const navigate = useNavigate();

        const validateEmailSyntax = (mail) => {
            let result = {status : true, errorMsg : "" }
            
            console.log("Mail Validation: ", mail)

            if (mail === "")
                result = {status : false, errorMsg : "El mail no puede ser vacio"}
            else if (!isValidEmailWithRegex(mail))
                result = { status : false, errorMsg : "El mail no tiene un formato valido" }
    
            return result;
        }

        const getSecurityQuestion = async () => {
            const email = emailInput
            let questionResult = await GetRecoveryQuestion(email);

            console.log(questionResult);

            if (questionResult.rdo === 400)
            {
                setValidEmail(false);
                setEmailErrorMsg(questionResult.mensaje);
            }
            else if (questionResult.rdo === 0){
                setSecurityQuestion(questionResult.securityQuestion)
                setShowQuestion(true);
            }

        }

        const validateSecurityAnswerBack = async () => {

            const email = emailInput;
            const answer = answerInput;

            let answerValidateResult = await ValidateAnswerBack(email, answer);

            if (answerValidateResult.rdo === 0){
                const isValidAnswer = answerValidateResult.isAnswerValid;
                setValidAnswer(isValidAnswer)

                if (isValidAnswer){
                    setValidAnswer(true)
                    setAnswerErrorMsg('Respuesta correcta')
                    setShowNewPassword(true)
                }else{
                    setValidAnswer(false)
                    setAnswerErrorMsg(answerValidateResult.rdo.mensaje)
                }
            }
            else if (answerValidateResult.rdo === 400){
                setValidAnswer(false)
                setAnswerErrorMsg(answerValidateResult.mensaje)
            }

        }

        const updatePassword = async function () {

            const userData = {
                email : emailInput,
                newPassword : newPassword
            }

            let result = await updatePasswordFromRecovery(userData);

            console.log('Result Recover Password: ', result);

            if (result.rdo === 0){
                navigate('/password-recovered')
            }
            else{
                setNewPasswordErrorState(false);
                setNewPasswordErrorMsg(result.mensaje);
            }

        }
        
        const onSearchQuestionPressed = (event) => {

            const emailValidation = validateEmailSyntax(emailInput)

            // Syntax Validation
            if (!emailValidation.status)
            {
                setValidEmail(emailValidation.status)
                setEmailErrorMsg(emailValidation.errorMsg)
                return;
            }

            // Backend Validation
            getSecurityQuestion();
        }

        const onEmailInputChange = (event) => {
            setEmailInput(event.target.value);
            setValidEmail(true)
            setEmailErrorMsg('')
            setSecurityQuestion('');
            setShowQuestion(false);
            resetFields()
        }

        const onAnswerChange = (event) => {
            setAnswerInput(event.target.value);
            setAnswerErrorMsg('')
            setValidAnswer(true)
        }

        const resetFields = () => {
            setShowNewPassword(false);
            setNewPasswordErrorState(false);
            setNewPasswordErrorMsg('');
            setConfirmPasswordErrorState(false);
            setConfirmPasswordErrorMsg('');
        }

        const onSubmitData = (event) => {
            if (!showQuestion)
                event.preventDefault();
            else{
                // Validate Answer Syntax
                const answerSyntaxResult = validateSecurityAnswerSyntax(answerInput);

                console.log('Answer Syntax: ', answerSyntaxResult)

                if (!answerSyntaxResult){
                    setValidAnswer(false);
                    setAnswerErrorMsg('La respuesta necesita al menos 2 caracteres');
                }
                else {
                    // Backend Validation
                    validateSecurityAnswerBack();
                }
            }

            event.preventDefault();
        }
        
        const onSubmitPassword = (event) => {

            if (!isValidPassword(newPassword))
            {
                setNewPasswordErrorState(true)
                setNewPasswordErrorMsg('Contraseña no valida, se requieren al menos 7 caracteres y debe contener al menos 1 letra y 1 un numero')
                event.preventDefault();
                return;
            }

            if (newPassword !== confirmPassword){
                setConfirmPasswordErrorState(true)
                setConfirmPasswordErrorMsg('Las contraseñas no son iguales')
                event.preventDefault();
                return;
            }

            // Backend Validation
            updatePassword();
            event.preventDefault();
        }
        
        const onNewPasswordChange = (event) => {
            setNewPassword(event.target.value)
            setNewPasswordErrorState(false);
            setNewPasswordErrorMsg('');
        }

        const onConfirmPasswordChange = (event) => {
            setConfirmPassword(event.target.value)
            setConfirmPasswordErrorState(false);
            setConfirmPasswordErrorMsg('');
        }

        return(

            <Container component='main' maxWidth='xs'>
                <Box
                    sx={{
                        mt: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    >
                </Box>

                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <PasswordIcon/>
                </Avatar>
                <Typography variant='h6'>
                   Recuperar Contraseña 
                </Typography>

                <Box sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="email"
                            label="Correo Electrónico"
                            name="email"
                            autoComplete="email"
                            onChange={onEmailInputChange}
                            helperText = {emailErrorMsg}
                            error = {!isValidEmail}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            {!showQuestion && <Button variant='contained' onClick = {onSearchQuestionPressed}>Buscar Correo</Button>}
                        </Grid>

                        {
                            showQuestion &&
                            <>
                                <Grid item xs={12}>
                                    <Typography variant='h6'>Pregunta de seguridad: <br></br> {securityQuestion} </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                    required
                                    fullWidth
                                    name="securityAnswer"
                                    label="Respuesta de seguridad"
                                    type="text"
                                    id="securityAnswer"
                                    onChange={onAnswerChange}
                                    helperText = {answerErrorMsg}
                                    error = {!isValidAnswer}
                                    autoComplete="text"
                                    />
                                </Grid>

                                {
                                    showNewPasswordField && 
                                    <>
                                        <NewPasswordField
                                            onChange = {onNewPasswordChange}
                                            error = {newPasswordErrorState}
                                            helperText = {newPasswordErrorMsg}
                                            name = 'new_password'
                                            label= 'Nueva Contraseña'
                                            >
                                        </NewPasswordField>
                                        
                                        <NewPasswordField
                                            onChange = {onConfirmPasswordChange}
                                            error = {confirmPasswordErrorState}
                                            helperText = {confirmPasswordErrorMsg}
                                            name = 'confirm_password'
                                            label='Confirmar contraseña'
                                            >
                                        </NewPasswordField>

                                        <Grid item xs={12} sm={12}>
                                            <Button 
                                                sx={{mt:3, mb: 2}}
                                                variant='contained'
                                                fullWidth
                                                onClick={onSubmitPassword}
                                            >
                                                Modificar Contraseña
                                            </Button>
                                        </Grid>
                                        
                                    </>
                                }
                                
                                {
                                    !showNewPasswordField &&
                                    <>
                                    <Grid item xs={12} sm={6}>
                                        <Button 
                                            sx={{mt:3, mb: 2}}
                                            variant='contained'
                                            fullWidth
                                            onClick={onSubmitData}
                                        
                                            >
                                            Recuperar</Button>
                                    </Grid>
                                    </>
                                    
                                }
                            </>
                        }
            
                    </Grid>
                </Box>

            </Container>
        );
}