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

export function ResetPasswordBody(props){

        const [emailInput, setEmailInput] = useState('');
        const [isValidEmail, setValidEmail] = useState(true);
        const [emailErrorMsg, setEmailErrorMsg] = useState('');

        const [answerInput, setAnswerInput] = useState('');
        const [isValidAnswer, setValidAnswer] = useState(true);
        const [answerErrorMsg, setAnswerErrorMsg] = useState('');

        const [securityQuestion, setSecurityQuestion] = useState('');
        const [showQuestion, setShowQuestion] = useState(false);

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

            console.log("Answer Result: ", answerValidateResult)

            if (answerValidateResult.rdo === 0){
                const isValidAnswer = answerValidateResult.isAnswerValid;
                setValidAnswer(isValidAnswer)

                if (isValidAnswer){
                    setValidAnswer(true)
                    setAnswerErrorMsg('Respuesta correcta')
                    // setTimeout( () => {
                    //     navigate('/home');
                    // }, 1000);
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
        }

        const onAnswerChange = (event) => {
            setAnswerInput(event.target.value);
            setAnswerErrorMsg('')
            setValidAnswer(true)
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
                                    autoComplete
                                    />
                                </Grid>

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
            
                    </Grid>
                </Box>

            </Container>
        );
}