import React from 'react'
import { Container, Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
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

    const itemData = [
        {
          img: Agilcred,
          title: 'Agilcred',
        },
        {
            img: Aginco,
            title: 'Aginco',
        },
        {
            img: Amesup,
            title: 'Amesup',
        },
        {
            img: Federada,
            title: 'Federada',
        },
        {
            img: Agilcred,
            title: 'Fern',
          },
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
                        p: 5,

                    }}>
                        <Container >
                            <Grid container spacing={8}>

                                <Grid item xs={4}>
                                    <img src={Agilcred} alt="Agilcred" />
                                </Grid>
                                <Grid item xs={4}>
                                    <img src={Aginco} alt="Mutual Aginco" />
                                </Grid>
                                <Grid item xs={4}>
                                    <img src={Gusa} alt="Grupo Union SA" />
                                </Grid>

                                <Grid item xs={4}>
                                    <img src={Federada} alt="Federada ayuda economica" />
                                </Grid>
                                <Grid item xs={3}>
                                    <img src={Amesup} alt="Amesup" />
                                </Grid>
                                <Grid item xs={3}>
                                    <img src={Ivc} alt="IVC" />
                                </Grid>
                                <Grid item xs={2}>
                                    <img src={Provincial} alt="Mutual Provincial" />
                                </Grid>

                                <Grid item xs={3}>
                                    <img src={Mupim} alt="Mupim" />
                                </Grid>
                                <Grid item xs={2}>
                                    <img src={Lyf} alt="Luz y Fuerza" />
                                </Grid>
                                <Grid item xs={4}>
                                    <img src={Scbs} alt="San cristobal" />
                                </Grid>
                                <Grid item xs={3}>
                                    <img src={Venado} alt="venado" />
                                </Grid>

                            </Grid>
                        </Container>
                    </Box>
                </ScrollAnimation>
            </Box>

        </Container >
    )
}

export default Clientes
