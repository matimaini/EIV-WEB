import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <>    
        <Box sx={{backgroundColor:'#373C46', minWidth:'100%'}}>
            <Typography component="div"
                    align="center"
                    variant="subtitle1"
                    sx={{
                        flexGrow: 1,
                        fontFamily: 'Montserrat',
                        fontWeight: 'light',
                    }} >
                 Tel administracion: (0341) 5284551 | Tel. Soporte: (0341) 5284550 | Cel: (0341) 152-296137 | Corrientes 631, 5° C y D | Rosario, Santa Fe, Argentina.
            </Typography>
        </Box>
        </>
    )
}

export default Footer
