import { Box, Typography } from '@mui/material'
import React from 'react'
import { FormComponent } from '../shared/form/FormComponent';
import './Curriculum.css'
const Curriculum = ({ titulo }) => {
    var someDate = new Date();
    var date = someDate.setDate(someDate.getDate());
    var defaultValue = new Date(date).toISOString().split("T")[0];

    const initialForm = {
        nombre: {
            value: '',
            label: 'Nombre y apellido',
            required: true,
        },
        fechaNacimiento: {
            value: '',
            label: 'Fecha de Nacimiento',
            type: 'date',
            defaultValue: defaultValue,
            required: true,
        },
        domicilio: {
            value: '',
            label: 'Domicilio'
        },
        telefono: {
            value: '',
            label: 'Teléfono',
            type: 'number',
            required: true,
        },
        email: {
            value: '',
            label: 'Email',
            type: 'mail',
            required: true,
        },
        comentarios: {
            value: '',
            label: 'Comentarios',
            multiline: true,
        },
        file: {
            value: null,
            name: '',
            type: 'file',
            label: 'add-cv',
        }
    }

    return (
        <>
            <Box
                component="div"
                justifyContent={'center'}
                alignItems={'center'}
                display={'flex'}
                flexDirection={'column'}
                sx={{
                    '& .MuiTextField-root': {p: 1, width: '100%', borderTopLeftRadius:10, borderTopRightRadius:10 },
                    '& .MuiInputLabel-root': { fontWeight: '1rem', borderTopLeftRadius:10, borderTopRightRadius:10 },
                    mt:5,
                    textAlign: 'center'
                }}>
                <Typography
                    component="div"
                    align="center"
                    variant="h4"
                    sx={{
                        flexGrow: 1,
                        fontFamily: 'Montserrat',
                        fontWeight: 'bold',
                    }} >
                    {titulo}
                </Typography>  
                <FormComponent initialForm={initialForm}></FormComponent>                                     
            </Box>
        </>
    )
}

export default Curriculum
