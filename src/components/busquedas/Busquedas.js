import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import { ButtonComponent } from '../shared/button/ButtonComponent';
import Fondo from '../../assets/logos/img_contenido_redesb.png';
import { ComponentContainer } from '../shared/container/componentContainer';

const Busquedas = () => {
    return (
        <ComponentContainer bgColor="#373C46" bgImg={Fondo}>
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
                            BUSQUEDAS LABORALES
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
                                paddingLeft: '16px'
                            }}>
                                <b>DESARROLLADORES JAVA/.NET</b>
                                <div sx={{}}>
                                    <p>Formá parte de un equipo de implementación de software</p>
                                    <p style={{marginBottom: 0}}><b>REQUISITOS EXCLUYENTES:</b></p>
                                    <ul style={{fontSize: '1.1rem'}}>
                                        <li>Backend java o .net developer con +3 años de experiencia</li>
                                        <li>Conocimientos de bases de datos relacionales y transact-sql</li>
                                        <li>Experiencia y/o conocimientos consumiendo y desarrollando servicios rest y/o soap</li>
                                        <li>Buen manejo de herramientas de versionado de codigo / git</li>
                                        <li>Nivel de ingles: intermedio</li>
                                    </ul>
                                    <p style={{marginBottom: 0}}><b>REQUISITOS DESEABLES: </b></p>
                                    <ul style={{fontSize: '1.1rem'}}>
                                        <li>TDD e integracion continua</li>
                                        <li>Revision de código, ajuste de performance, cuellos de botella</li>
                                        <li>Patrones de diseño y arquitectura, event-driven architecture y soa</li>
                                        <li>Experiencia en rubro de seguros</li>
                                        <li>Experiencia en prácticas agile, metodologia scrum</li>
                                    </ul>
                                    <p style={{marginBottom: 0}}><b>OFRECEMOS: </b></p>
                                    <ul style={{fontSize: '1.1rem'}}>
                                        <li>Bono anual por cumplimiento de objetivos</li>
                                        <li>Acceso a plataforma de capacitacion online</li>
                                        <li>Beneficios para tu salud y bienestar</li>
                                        <li>Gift card con importantes beneficios</li>
                                        <li>Flexibilidad para trabajo en nuestras oficinas o trabajo remoto</li>
                                    </ul>
                                </div>
                                <ButtonComponent text="Envianos tu cv" icon="add" type="file" name="#rrhh"/>
                            </Box>
                        </Typography>
                    </Box>
                </ScrollAnimation>
            </Box>
        </ComponentContainer>
    )
}

export default Busquedas
