import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import  './Barra.css'
import  './BotonBarra.js'



const Barra = () => {

    
  

    return (
        <>

            <Container maxWidth="false" fixed>
                <Box >
                    <AppBar position="fixed" sx={{backgroundColor: 'white'}}>
                        <Toolbar >

                            <img src="logos/eiv_color2.png" alt="logo"  />
                            
                            <Typography  color="primary" sx={{  m:'auto'}} align="center">
                            
                                <Button variant="text" color="primary" href="#home"> HOME</Button>
                                <Button variant="text" color="primary" href="#Empresa" >EMPRESA</Button>
                                <Button variant="text" color="primary" href="#productos">PRODUCTOS</Button>
                                <Button variant="text" color="primary" href="#clientes">CLIENTES</Button>
                                <Button variant="text" color="primary" href="#rrhh">    TALENTO HUMANO</Button>
                                <Button variant="text" color="primary" href="#contacto">CONTACTO</Button>
                            
                            </Typography>


                            <Button color="info" variant='outlined' >Acceso clientes</Button>
                        </Toolbar>
                    </AppBar>
                </Box>
            </Container>
            

        </>
    )
}

export default Barra
