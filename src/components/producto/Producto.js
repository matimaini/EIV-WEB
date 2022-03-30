import {  Card, CardContent, CardMedia, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const Producto = ({ fondo, colorfondo, titulo, data, imagen }) => {
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
            }}  >

            <Box sx={{
                textAlign: 'left', m: 'auto', width: '70%', alignContent: 'center'
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
                            }} >

                            {titulo}


                        </Typography>
                    </Box>
                    <Box sx={{
                        textAlign: 'left',
                        borderLeft: 10,
                        borderColor: 'text.primary',
                        p: 2, verticalAlign: 'middle'
                    }}>

                        <Card sx={{ display: 'flex', bgcolor: 'transparent', boxShadow: 'none', verticalAlign: 'middle' }}>
                            <Box sx={{}}>
                                <CardContent sx={{ flex: '1 0 auto', justifyContent: 'center' }}>
                                    <Typography
                                        variant="h6"
                                        component="div"
                                        align="left"
                                        sx={{
                                            flexGrow: 1,
                                            fontFamily: 'Montserrat',
                                            verticalAlign: "middle"
                                        }} >

                                        {data}

                                    </Typography>
                                </CardContent>
                            </Box>
                            <CardMedia sx={{ width: 'auto', height: 'auto', maxWidth: 140, maxHeight: 140, m: 'auto' }}
                                component="img"
                                image={imagen}
                            />
                        </Card>
                    </Box>
                </ScrollAnimation>
            </Box>

        </Container >
    )
}

export default Producto
