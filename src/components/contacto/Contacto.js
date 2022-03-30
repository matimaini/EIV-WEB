import React /*, { useState }*/ from 'react'

import {  Box, Container,  Typography } from '@mui/material'
import FormularioC from './FormularioC';
import './Contacto.css'
import ScrollAnimation from 'react-animate-on-scroll';
//import { Form } from 'react-bootstrap';
//import FormularioFormik from './formik';



const Contacto = ({ fondo, colorfondo, titulo }) => {



//const [producto, setproducto] = useState("")

  return (
    <>
      <Container maxWidth="100%"
        id="producto"
        align="center"
        justify="center"
        direction="column"
        sx={{
          bgcolor: colorfondo,
          minHeight: "100vh",
          verticalAlign: "center",
          alignContent: "center",
          backgroundImage: `url(${fondo} )`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          display: "flex",

        }}  >

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
              {titulo}
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

      </Container>
    </>
  )
}

export default Contacto
