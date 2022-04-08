import { TextField, Typography } from "@mui/material"
import { useForm } from "../../../hooks/useForm"
import { Box } from "@mui/system"
import { ButtonComponent } from "../button/ButtonComponent"
import { useAxios } from "../../../hooks/useAxios"
import { useEffect, useRef } from "react"
import { ReCAPTCHA } from "react-google-recaptcha"

export const FormComponent = ({initialForm}) => {
    const { fetchData, response, error, loading } = useAxios()
    const { state, submitHandler, changeHandler } = useForm(initialForm, (values, captcha) => fetchData('post', '/curriculum', captcha, values))
    const refCurriculum = useRef(null)
    const day = (new Date()).getDate();
    const month = (new Date()).getMonth() + 1;
    const year = (new Date()).getFullYear();
    const date = `${year}-0${month}-0${day}`;

    useEffect(() => {
        console.log(refCurriculum)
        window.grecaptcha?.render('curriculumCaptcha', {
            sitekey: "6LfCyEUfAAAAAF8_MKmILZdsxH8yAy1UkxFY0QJH",
        })
    })

    return(
        <Box component="form" onSubmit={submitHandler} sx={{ textAlign: 'center', display: 'grid', flexWrap: 'wrap'}}>
            {
                Object.keys(state).map((key) => {
                    if(key !== 'archivos') {
                        return (
                        <TextField 
                            key={key}
                            id={key}
                            onChange={(event) => changeHandler(event)}
                            value={state[key].value}
                            label={state[key].label}
                            required={state[key].required}
                            type={state[key].type}
                            multiline={state[key].multiline}
                            inputProps={key === 'fechaNacimiento'? {'min': "1800-01-01", 'max':`${date}`} : ''}
                            variant='filled' 
                            color="secondary" 
                        ></TextField>)
                    } else {
                        return null;
                    }
                })
            }
            <Box 
                sx={{
                    justifyContent: 'space-around', 
                    p: 2, 
                    display: 'flex',
                    flexWrap: 'wrap', 
                    alignItems: 'end'
                }}>
                    {initialForm.archivos ?
                    <Box sx={{ display: "flex", flexDirection: "column"}}>
                        <Typography variant='p' sx={{color: 'white', padding: 0, margin: 0, height:"20px"}}>{state.archivos.name}</Typography>
                        <ButtonComponent change={changeHandler} htmlFor={'archivos'} icon="add" text="Adjuntá tu CV" inputFile />
                    </Box>  : ''}
                <ButtonComponent type="submit" htmlFor="send-cv" icon="nav" text="Enviar formulario" />
            </Box>     
            <div id="curriculumCaptcha"></div>
        </Box>
    )
}