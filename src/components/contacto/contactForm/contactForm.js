import { Box, Autocomplete, TextField } from "@mui/material";
import { useForm } from "../../../hooks/useForm";
import './contactForm.css';
import { ButtonComponent } from "../../shared/button/ButtonComponent";
import ClearIcon from '@mui/icons-material/Clear';

export const ContactForm = ({initialForm}) => {
    const { state, changeHandler, submitHandler } = useForm(initialForm, values => console.log(values));

    const options = [
        { parent: "producto", label: "Portal vendedores", value: "Portal vendedores", id: 1 },
        { parent: "producto", label: "Portal clientes", value: "Portal clientes", id: 2 },
        { parent: "producto", label: "Administracion de tarjetas", value: "Administracion de tarjetas", id: 3 },
        { parent: "producto", label: "Sistema financiero", value: "Sistema financiero", id: 4 }
    ]

    const handleOptions = (option, value) => {
       let optionSelected = !!(option.value === value)

       return optionSelected
    }

    return(
        <>
            <Box
                component="form"
                onSubmit={submitHandler}
                sx={{
                    textAlign: 'center', 
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    width: {xs: '100%', sm: '500px'},

                    '& .MuiTextField-root': { m: 1, minWidth: '100px', width: '100%', maxWidth: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10},
                    '& .MuiInputLabel-root': { fontWeight: '1rem', borderTopLeftRadius: 10, borderTopRightRadius: 10, color: 'black' },                   
                    '& .MuiAutocomplete-root': { m: 1, maxWidth: '100%', width: '100%',  borderTopLeftRadius: 10, borderTopRightRadius: 10 },
                    '& .MuiAutocomplete-root .MuiTextField-root': { m: 0 },
                    '& .Mui-focused': {color: 'white !important'},
                    '& .MuiOutlinedInput-notchedOutline': { border: '1px solid rgba(0, 0, 0, 0.23) !important'},
                }}  
            >
                { Object.keys(state).map((key, i) => {
                    switch(key) {
                        case 'producto':
                            return(
                                <Autocomplete
                                    disablePortal
                                    key={i}
                                    value={state[key].value}
                                    options={options}
                                    isOptionEqualToValue={(option, value) => handleOptions(option, value)}
                                    onChange={(event, newEvent) => changeHandler(event, newEvent)}
                                    disableClearable
                                    clearIcon={<ClearIcon id="producto" fontSize="small"/>}
                                    id={key}
                                    renderInput={(params) => <TextField {...params} label={state[key].label} id={key} />}
                                />
                            )
                        case 'pais':
                        case 'provincia':
                        case 'localidad':
                        case 'domicilio':
                        case 'celular':
                        case 'telefono':
                            return(
                                <div key={i} className="form-container">
                                    <TextField   
                                        required={state[key].required}
                                        variant="filled"
                                        color="secondary"   
                                        onChange={(event) => changeHandler(event)}
                                        id={key}
                                        label={state[key].label}
                                        type={state[key].type}
                                        multiline={state[key].multiline}
                                    />
                                </div>
                            )
                        default:
                            return(
                                <TextField   
                                    key={i}
                                    required={state[key].required}
                                    variant="filled"
                                    color="secondary"   
                                    onChange={(event) => changeHandler(event)}
                                    id={key}
                                    label={state[key].label}
                                    type={state[key].type}
                                    multiline={state[key].multiline}
                                />
                            )
                    }
                })}
                <Box sx={{ justifyContent: 'center', p: 2, display: 'block', width: '100%' }}>
                    <ButtonComponent type="submit" icon="nav" text="Enviar formulario"/>
                </Box>
            </Box>
        </>
    )
}