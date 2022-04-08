import React from 'react'
import { Box, Typography } from '@mui/material'
import ScrollAnimation from 'react-animate-on-scroll';
import Fondo from '../../assets/logos/img_contenido_redesb.png';
import { ComponentContainer } from '../shared/container/componentContainer';
import { ContactForm } from './contactForm/contactForm';

const Contacto = () => {
  const form = {
    producto: {
        value: 'Portal vendedores',
        label: 'Producto',
        required: true,
    },
    nombreApellido: {
        value: '',
        label: 'Nombre y apellido',
        required: true,
    },
    empresa: {
        value: '',
        label: 'Empresa',
        required: true,
    },
    telefono: {
        value: '',
        label: 'Teléfono',
        required: true,
        type: 'number'
    },
    celular: {
        value: '',
        label: 'Celular',
        type: 'number'
    },
    domicilio: {
        value: '',
        label: 'Domicilio',
    },
    localidad: {
        value: '',
        label: 'Localidad',
    },
    provincia: {
        value: '',
        label: 'Provincia',
    },
    pais: {
        value: '',
        label: 'País'
    },
    email: {
        value: '',
        label: 'Email',
        type: 'email',
        required: true,
    },
    comentarios: {
        value: '',
        label: 'Comentarios',
        required: true,
        multiline: true,
        outlined: 'outlined-textarea'
    }     
  }

  return (
    <>
      <ComponentContainer bgImg={Fondo}>
        <Box
           sx={{ 
              width: '100%', 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center', 
              alignItems: 'center', 
              textAlign: 'left', 
            }}>
          <ScrollAnimation
            animateIn='fadeIn'
            animateOut='fadeOut'
            duration={1}
            delay={0.5}
          >
            <Typography
              component="div"
              align="center"
              variant="h4"
              sx={{
                flexGrow: 1,
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                mt: 2
              }} >
              CONTACTO
            </Typography>
            <Box
                component="div"
                justifyContent={'center'}
                alignItems={'center'}
                display={'flex'}
                flexDirection={'column'}
            >            
              <ContactForm initialForm={form}/>
            </Box>
          </ScrollAnimation>
        </Box>
      </ComponentContainer>
    </>
  )
}

export default Contacto
