import { TextField } from "@mui/material"
import { useForm } from "../../../hooks/useForm"
import { Box } from "@mui/system"
import { ButtonComponent } from "../button/ButtonComponent"

export const FormComponent = ({initialForm}) => {
    const { state, submitHandler, changeHandler } = useForm(initialForm, values => console.log(values))

    return(
        <Box component="form" onSubmit={submitHandler} sx={{ textAlign: 'center', display: 'grid', flexWrap: 'wrap'}}>
            {
                Object.keys(state).map((key) => {
                    if(key !== 'file') {
                        return (
                        <TextField 
                            key={key}
                            id={key}
                            onChange={(event) => changeHandler(event)}
                            value={state[key].value ? state[key].value : state[key].defaultValue}
                            label={state[key].label}
                            required={state[key].required}
                            type={state[key].type}
                            multiline={state[key].multiline}
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
                    flexWrap: 'wrap' 
                }}>
                {initialForm.file ? <ButtonComponent change={changeHandler} htmlFor={'file'} icon="add" text="Adjuntá tu CV" inputFile /> : ''}
                <ButtonComponent type="submit" htmlFor="send-cv" icon="nav" text="Enviar formulario" />
            </Box>     
        </Box>
    )
}