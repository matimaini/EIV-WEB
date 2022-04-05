import React from 'react'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';  
import { Box } from '@mui/system'
import { clientesData } from '../../data/clientesData';
import ScrollAnimation from 'react-animate-on-scroll'
import Fondo from '../../assets/logos/img_contenido_redesb.png';
import { ComponentContainer } from '../shared/container/componentContainer';

const Clientes = () => {
    const Image = styled(Box)(() => ({
        objectFit: 'scale-down',
        width: 'fit-content'
    }))

    return (
        <ComponentContainer bgColor={'#373C46'} bgImg={Fondo}>
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
                                fontWeight: 'bold'
                            }} >
                            ALGUNOS DE NUESTROS CLIENTES
                        </Typography>
                    </Box>
                    <Box sx={{
                        textAlign: 'left',
                        borderLeft: 0,
                        borderColor: 'text.primary',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                      <Grid container columns={{ xs: 1, sm: 2, md: 4 }} spacing={2} rowGap={3} columnGap={3} sx={{
                                width: '100%',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                { clientesData.map((cliente, i) => {
                                    return (
                                        <Grid item key={i} sx={{}}>
                                            <Image>
                                                <img width={'100%'} src={cliente.img} alt={cliente.title} />
                                            </Image>
                                        </Grid>
                                    )
                                })}
                        </Grid>      
                    </Box>
                </ScrollAnimation>
            </Box>
        </ComponentContainer>
    )
}

export default Clientes
