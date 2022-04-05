import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import Curriculum from '../curriculum/Curriculum'
import ScrollAnimation from 'react-animate-on-scroll'
import FondoI from '../../assets/logos/img_contenido_redesc.png';
import { ComponentContainer } from '../shared/container/componentContainer'

const Rrhh = () => {
    return (
        <>
            <ComponentContainer bgImg={FondoI}>
                <ScrollAnimation
                    animateIn='fadeIn'
                    animateOut='fadeOut'
                    duration={1}
                    delay={0.5}
                >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        textAlign: 'left', 
                        mt: 5, 
                        mb: 5, 
                        width: '100%'
                    }}>
                        <div style={{width: '70%'}}>
                            <Typography
                                variant="h4"
                                component="div"
                                align="left"
                                paddingBottom={'40px'}
                                sx={{
                                    flexGrow: 1,
                                    fontFamily: 'Montserrat',
                                    fontWeight: 'bold'
                                }}>
                                TALENTO HUMANO
                            </Typography>

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
                                        paddingLeft:"16px"
                                    }}>
                                        <b>¿QUERÉS SER PARTE DE NUESTRO EQUIPO?</b>
                                        <p />
                                        
                                        EIV Software S.R.L. es una empresa de desarrollo de software orientada a entidades financieras.
                                        En EIV creemos en el trabajo en equipo, como motor de mayor motivacion, compromiso, nuevas ideas y mejores resultados.
                                        Es por eso que consideramos sumarte a nuestro equipo.<br />
                                        <p><b>Conocimientos de: </b></p>
                                        <b>Bases de datos: </b>SQL, MongoDB, Elastic Search.<br />
                                        <b>Lenguajes: </b>Java, Javascript, VB6.<br />
                                        <b>Framework: </b>Spring, Angular, React.<br />

                                    </Box>
                                </Typography>
                            </Box>
                        </div>
                        <Curriculum
                            titulo="DEJANOS TU CURRICULUM"
                        />
                    </Box>
                </ScrollAnimation>
            </ComponentContainer>
        </>
    )
}

export default Rrhh
