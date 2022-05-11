import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import PasswordIcon from '@mui/icons-material/Password';
import { getSecurityQuestion, matchAnswerWithSecurityQuestion } from "../../utilities/sharedData";
import React, {useState } from 'react';
import { useNavigate} from "react-router-dom";
import { BasicDialog } from "../Misc/BasicDialog";

export function ResetPasswordBody(props){

        const [emailInput, setEmailInput] = useState('');
        const [answerInput, setAnswerInput] = useState('');
        const [securityQuestion, setSecurityQuestion] = useState('');
        const [showQuestion, setShowQuestion] = useState(false);
        const [answerDialogText, setAnswerDialogText] = useState('');
        const [questionSearchDialogText, setQuestionSearchDialogText] = useState('');
        const [isOpenAnswerDialog, setIsOpenAnswerDialog] = useState(false);
        const [isOpenQuestionSearchDialog, setOpenQuestionSearchDialog] = useState(false);

        const navigate = useNavigate();
        
        const onSearchQuestionPressed = (event) => {
            const question = getSecurityQuestion(emailInput);
            const hasQuestion = question.length > 0;

            setSecurityQuestion(question);
            setOpenQuestionSearchDialog(!hasQuestion);
            setShowQuestion(hasQuestion);

            if (!hasQuestion)
                setQuestionSearchDialogText('El mail ingresado no se encuentra registrado');

        }

        const onExitQuestionDialogClicked = (event) => {
            setOpenQuestionSearchDialog(!isOpenQuestionSearchDialog);
        }

        const onEmailInputChange = (event) => {
            setEmailInput(event.target.value);
            setSecurityQuestion('');
            setShowQuestion(false);
        }

        const onAnswerChange = (event) => {
            setAnswerInput(event.target.value);
            setAnswerDialogText('');
        }

        const onExitDialogButtonPressed = (event) => {
            setIsOpenAnswerDialog(!isOpenAnswerDialog);
        }

        const onSubmitData = (event) => {
            if (!showQuestion)
                event.preventDefault();
            else{
                const matchAnswer = matchAnswerWithSecurityQuestion(emailInput, answerInput);
                setIsOpenAnswerDialog(true);
                
                if (!matchAnswer)
                {
                    setAnswerDialogText('Respuesta Incorrecta, intente de nuevo')
                }
                else
                {
                    setAnswerDialogText('Respuesta correcta, su contraseña se ha enviado a su mail. En breve sera redirigido a la pagina de inicio')

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
                            />
                        </Grid>

                        <BasicDialog
                            open = {isOpenQuestionSearchDialog}
                            dialogContentText={questionSearchDialogText}
                            onExitButtonPressed = {onExitQuestionDialogClicked}
                            >
                        </BasicDialog>

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

                                <BasicDialog
                                    open = {isOpenAnswerDialog}
                                    dialogContentText={answerDialogText}
                                    onExitButtonPressed = {onExitDialogButtonPressed}
                                    >
                                </BasicDialog>

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