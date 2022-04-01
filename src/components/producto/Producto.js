import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { useMediaQuery } from '@mui/material'
import { ProductoCard } from './productoCard/ProductoCard'
import { ComponentContainer } from '../shared/container/componentContainer'

const Producto = ({ fondo, colorfondo, titulo, data, imagen }) => {
    const showImg = useMediaQuery('(max-width:850px)');

    return (
        <ComponentContainer bgColor={colorfondo} bgImg={fondo}>
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
                            width='100%'
                            variant="h4"
                            component="div"
                            align="left"
                            sx={{
                                flexGrow: 1,
                                fontFamily: 'Montserrat',
                                fontWeight: 'bold',
                            }} >
                            {titulo}
                        </Typography>
                    </Box>
                    <ProductoCard data={data} showImg={showImg} imagen={imagen} />
                </ScrollAnimation>
            </Box>
        </ComponentContainer >
    )
}

export default Producto
