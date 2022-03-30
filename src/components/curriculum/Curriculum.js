
import { Box,  Fab, FormControl, TextField, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import NavigationIcon from '@mui/icons-material/Navigation'
import React from 'react'
import './Curriculum.css'

const Curriculum = ({ fondo, colorfondo, titulo }) => {

    var someDate = new Date();
    var numberOfDaysToAdd = 3;
    var date = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    var defaultValue = new Date(date).toISOString().split("T")[0];

    return (

        <>
        <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '50ch', borderTopLeftRadius:10, borderTopRightRadius:10 },
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
                            m: '2'
                        }} >

                        {titulo}


                    </Typography>
                    <Box sx={{
                        textAlign: 'center',

                    }}>
                        <div>
                            <FormControl >
                                <TextField required variant="filled" color="secondary" label="Nombre y apellido" />
                                <TextField required variant="filled" color="secondary" label="Fecha de nacimiento" type="date" defaultValue={defaultValue}/>
                                <TextField          variant="filled" color="secondary" label="Domicilio" />
                                <TextField required variant="filled" color="secondary" label="Teléfono" type="number" />
                                <TextField required variant="filled" color="secondary" label="Email" type="mail" />
                                <TextField variant="filled" color="secondary" label="Comentarios"
                                    id="outlined-textarea"
                                    placeholder="Placeholder"
                                    multiline />

                                <Box sx={{ justifyContent: 'space-around', p: 2, display: 'flex' }}>
                                    <label htmlFor="boton-cv">
                                        <input type="file" id="boton-cv" style={{ display: 'none' }} />

                                        <Fab variant="extended"
                                            color="secondary"
                                            aria-label="add"
                                            elementtype="file"
                                            component="span"
                                            sx={{ m: 2 }} >

                                            <AddIcon elementtype='file' />
                                            Adjuntá tu CV
                                        </Fab>

                                    </label>
                                    <Fab variant="extended"
                                        color="secondary"
                                        aria-label="add"
                                        
                                        component="span"
                                        sx={{ m: 2 }}
                                    >
                                        <NavigationIcon />
                                        Enviar formulario
                                    </Fab>
                                </Box>
                            </FormControl>
                        </div>

                    </Box>
                </Box>
            {/* </Container> */}
        </>
    )
}

export default Curriculum
