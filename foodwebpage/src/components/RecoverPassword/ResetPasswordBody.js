import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import PasswordIcon from '@mui/icons-material/Password';
import { getSecurityQuestion, matchAnswerWithSecurityQuestion } from "../../utilities/sharedData";
import React, {useState } from 'react';
import { useNavigate} from "react-router-dom";

import { isValidEmailWithRegex } from "../../utilities/stringFunctions";

export function ResetPasswordBody(props){

        const [emailInput, setEmailInput] = useState('');
        const [isValidEmail, setValidEmail] = useState(true);
        const [emailErrorMsg, setEmailErrorMsg] = useState('');

        const [answerInput, setAnswerInput] = useState('');
        const [isValidAnswer, setValidAnswer] = useState(true);

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
        
        const onSearchQuestionPressed = (event) => {

            const emailValidation = validateEmailSyntax(emailInput)

            console.log("On Search Pressed", emailValidation)

            if (!emailValidation.status)
            {
                setValidEmail(emailValidation.status)
                setEmailErrorMsg(emailValidation.errorMsg)
                return;
            }

            event.preventDefault();
            return;
            const question = getSecurityQuestion(emailInput);
            const hasQuestion = question.length > 0;

            setSecurityQuestion(question);
            setShowQuestion(hasQuestion);
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
        }

        const onSubmitData = (event) => {
            if (!showQuestion)
                event.preventDefault();
            else{
                const matchAnswer = matchAnswerWithSecurityQuestion(emailInput, answerInput);
                
                if (!matchAnswer)
                {
                }
                else
                {
                    setTimeout(() => {
                        navigate('/home');
                    }, 1000);
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