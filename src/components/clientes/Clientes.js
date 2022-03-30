import React from 'react'
import { Container, Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';  
import { Box } from '@mui/system'
import Agilcred from '../../assets/logos/clientes/AGILCRED.png';
import Aginco from '../../assets/logos/clientes/AGINCO.png';
import Amesup from '../../assets/logos/clientes/AMESUP.png';
import Federada from '../../assets/logos/clientes/FEDERADA.png';
import Gusa from '../../assets/logos/clientes/GRUPO_UNION.png';
import Ivc from '../../assets/logos/clientes/IVC.png';
import Lyf from '../../assets/logos/clientes/LYF.png';
import Mupim from '../../assets/logos/clientes/MUPIM.png';
import Scbs from '../../assets/logos/clientes/SCBS.png';
import Venado from '../../assets/logos/clientes/VENADO.png';
import Provincial from '../../assets/logos/clientes/MUTUAL_PROVINCIAL.png';
import ScrollAnimation from 'react-animate-on-scroll'

const Clientes = ({ fondo, colorfondo, titulo }) => {

    const Image = styled(Box)(() => ({
        objectFit: 'scale-down',
    }))

    const itemData = [
        {
          img: Agilcred,
          title: 'Agilcred',
        },
        {
            img: Aginco,
            title: 'Mutual Aginco',
        },
        {
            img: Gusa,
            title: 'Grupo Union SA'
        },
        {
            img: Federada,
            title: 'Federada ayuda economica',
        },
        {
            img: Amesup,
            title: 'Amesup',
        },
        {
            img: Ivc,
            title: 'IVC'
        },
        {
            img: Provincial,
            title: 'Mutual Provincial',
        },
        {
            img: Mupim,
            title: 'Mupim'
        },
        {
            img: Lyf,
            title: 'Luz y fuerza',
        }, 
        {
            img: Scbs,
            title: 'San cristobal',
        },
        {
            img: Venado,
            title: 'Venado'
        }
      ];


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
                p: 5
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
                                fontWeight: 'bold'
                            }} >

                            {titulo}


                        </Typography>
                    </Box>
                    <Box sx={{
                        textAlign: 'left',
                        borderLeft: 0,
                        borderColor: 'text.primary',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                      <Grid container rowGap={3} columnGap={3} sx={{
                                width: '100%',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                { itemData.map((cliente, i) => {
                                    return (
                                        <Grid key={i} sx={{
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
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
        </Container >
    )
}

export default Clientes
