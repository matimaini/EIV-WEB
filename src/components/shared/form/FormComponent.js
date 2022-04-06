import { TextField, Typography } from "@mui/material"
import { useForm } from "../../../hooks/useForm"
import { Box } from "@mui/system"
import { ButtonComponent } from "../button/ButtonComponent"


export const FormComponent = ({ initialForm }) => {
    const { state, submitHandler, changeHandler } = useForm(initialForm, values => console.log(values))

    return (
        <Box component="form" onSubmit={submitHandler} sx={{ textAlign: 'center', display: 'grid', flexWrap: 'wrap' }}>
            {
                Object.keys(state).map((key) => {
                    if (key !== 'file') {
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
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
            <Box sx={{
                maxWidth: '400px',
                justifyContent: 'space-around',
                p: 2,
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'end'
            }}>

                <Typography variant='p' sx={{ overflow: 'hidden', width: '100%', whiteSpace: 'nowrap', justifyContent: 'center', color: 'white', padding: 0, margin: 0, textOverflow: 'ellipsis' }}>

                    Archivo seleccionado: {state.file.name}
                </Typography>
            </Box>
            <Box
                sx={{
                    justifyContent: 'space-around',
                    p: 2,
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'end'
                }}>

                {initialForm.file ?
                    <Box sx={{ display: "flex", flexDirection: "column" }}>

                        <ButtonComponent change={changeHandler} htmlFor={'file'} icon="add" text="Adjuntá tu CV" inputFile />
                    </Box> : ''}
                <ButtonComponent type="submit" htmlFor="send-cv" icon="nav" text="Enviar formulario" />
            </Box>
            </Box>
        </Box>
    )
}