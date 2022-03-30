
import { Container, Fab, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

const Busquedas = ({ fondo, colorfondo, titulo }) => {
    return (
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
                /* m: 2 */


            }}  >

            <Box sx={{
                textAlign: 'left', m: 'auto', width: '70%', mt: 5, mb: 5
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
                                fontWeight: 'bold'
                            }}>

                            {titulo}

                        </Typography>
                    </Box>
                    <Box sx={{
                        textAlign: 'left',
                        borderLeft: 10,
                        borderColor: 'text.primary',
                        p: 2
                    }}>

                        <Typography
                            variant="h6"
                            component="div"
                            align="left"
                            sx={{
                                flexGrow: 1,
                                fontFamily: 'Montserrat'
                            }}>
                            <Box sx={{
                                ml: 5
                            }}>
                                <u><b>DESARROLLADORES JAVA/.NET</b></u>
                                <p />
                                <div sx={{}}>
                                    Formá parte de un equipo de implementación de software<br />
                                    <p><b><u>REQUISITOS EXCLUYENTES:</u></b></p>
                                    <ul>
                                        <li> Backend java o .net developer con +3 años de experiencia</li>
                                        <li>Conocimientos de bases de datos relacionales y transact-sql</li>
                                        <li>Experiencia y/o conocimientos consumiendo y desarrollando servicios rest y/o soap</li>
                                        <li>Buen manejo de herramientas de versionado de codigo / git</li>
                                        <li>Nivel de ingles: intermedio</li>
                                    </ul>
                                    <p><b>Requisitos deseables: </b></p>
                                    <ul>
                                        <li>TDD e integracion continua</li>
                                        <li>Revision de código, ajuste de performance, cuellos de botella</li>
                                        <li>Patrones de diseño y arquitectura, event-driven architecture y soa</li>
                                        <li>Experiencia en rubro de seguros</li>
                                        <li>Experiencia en prácticas agile, metodologia scrum</li>
                                    </ul>
                                    <p><b>OFRECEMOS: </b></p>
                                    <ul>
                                        <li>Bono anual por cumplimiento de objetivos</li>
                                        <li>Acceso a plataforma de capacitacion online</li>
                                        <li>Beneficios para tu salud y bienestar</li>
                                        <li>Gift card con importantes beneficios</li>
                                        <li>Flexibilidad para trabajo en nuestras oficinas o trabajo remoto</li>
                                    </ul>
                                </div>
                                <div align="center">
                                    <Fab variant="extended"
                                        href="#rrhh"
                                        color="secondary"
                                        aria-label="add"
                                        elementtype="file"
                                        component="span"
                                        sx={{ m: 2 }} >

                                        <AddIcon elementtype='file' />
                                        Envianos tu CV
                                    </Fab>

                                </div>
                            </Box>
                        </Typography>

                    </Box>
                </ScrollAnimation>
            </Box>

        </Container >
    )
}

export default Busquedas
