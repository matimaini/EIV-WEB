import React from 'react'
import './Empresa.css'
import { Box } from '@mui/system'
import { Container, Typography } from '@mui/material'
import ScrollAnimation from 'react-animate-on-scroll'



const Empresa = ({ fondo, colorfondo, titulo }) => {

    return (
        <Container maxWidth="100% "
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

            <Box sx={{
                textAlign: 'left', m: 'auto', width: '70%'
            }}>
                <ScrollAnimation
                    animateIn='fadeIn'
                    animateOut='fadeOut'
                    duration={1}
                    delay={0.5}
                >
                    <Box sx={{ mb: 5 }}>
                        <Typography
                            variant="h4"
                            component="div"
                            align="left"
                            sx={{
                                flexGrow: 1,
                                fontFamily: 'Montserrat',
                                /* fontWeight: 'bold' */
                            }} >

                            {titulo}

                        </Typography>
                    </Box>
                    <Box sx={{
                        textAlign: 'left',
                        borderLeft: 10,
                        borderColor: 'text.primary',
                        p: 2, textTransform: 'uppercase'
                    }}>

                        <Typography
                            variant="h6"
                            component="div"
                            align="left"
                            sx={{
                                flexGrow: 1,
                                fontFamily: 'Montserrat'
                            }}>
                            <Box>
                                Somos una empresa con mas de 35 años brindando servicios de software de gestion integral
                                con el fin de satisfacer las necesidades informaticas con alto nivel de innovación y calidad hacia nuestros clientes.
                                EIV Software es una empresa que nace y se nutre de un grupo de profesionales altamente especializados en distintas áreas.
                                <p />
                                Desde el año 1982 comienza la actividad de este grupo en la Universidad Nacional de Rosario,
                                dedicándonos en un principio al área de la docencia tanto privada como académica y a la investigación
                                en las áreas de automatización informática, comunicaciones y organización de empresas.

                            </Box>
                        </Typography>

                    </Box>
                </ScrollAnimation>
            </Box>
        </Container>

    )
}

export default Empresa
