import React from 'react'
import { Box, Typography } from '@mui/material'
import ScrollAnimation from 'react-animate-on-scroll';
import FormularioC from './FormularioC';
import FondoI from '../../assets/logos/img_contenido_redesc.png';
import { ComponentContainer } from '../shared/container/componentContainer';

const Contacto = () => {
  return (
    <>
      <ComponentContainer bgImg={FondoI}>
        <Box
           sx={{ m: 'auto', textAlign: 'center', }}>
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

            <Box component="form"
              sx={{
                textAlign: 'center', display: 'grid', flexWrap: 'wrap'

              }}>

              <div>
                <FormularioC />
              </div>
            </Box>
          </ScrollAnimation>
        </Box>
      </ComponentContainer>
    </>
  )
}

export default Contacto
