import { TextField } from "@mui/material"
import { useForm } from "../../../hooks/useForm"
import { Box } from "@mui/system"
import { ButtonComponent } from "../button/ButtonComponent"

export const FormComponent = ({initialForm}) => {
    const { state, submitHandler, changeHandler } = useForm(initialForm, values => console.log(values))

    return(
        <form style={{width: '90%'}} onSubmit={submitHandler}>
            {
                Object.keys(state).map((key) => {
                    if(key !== 'file') {
                        return (
                        <TextField 
                            id={key}
                            onChange={changeHandler}
                            value={state[key].value}
                            label={state[key].label}
                            required={state[key].required}
                            type={state[key].type}
                            multiline={state[key].multiline}
                            variant='filled' 
                            color="secondary" 
                        ></TextField>)
                    } else {
                        return <></>
                    }
                })
            }
            <Box 
                sx={{
                    justifyContent: 'space-around', 
                    p: 2, 
                    display: 'flex' 
                }}>
                {initialForm.file ? <ButtonComponent change={changeHandler} htmlFor={'file'} icon="add" text="Adjuntá tu CV" inputFile /> : ''}
                <ButtonComponent type="submit" htmlFor="send-cv" icon="nav" text="Enviar formulario" />
            </Box>     
        </form>
    )
}