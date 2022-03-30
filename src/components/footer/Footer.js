import React from 'react'

const Footer = () => {
    return (
        <>
        
        <Container maxWidth="false" fixed>
                <Box sx={{
                    flexGrow: 1,
                    
                }}>
                    <AppBar position="fixed"  sx={{ top: 'auto', bottom: 0 }}>
                        <Toolbar sx={{ backgroundColor: '#FFFFFF' }}>

                            


                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Montserrat', color: 'black' }} align="center">
                                
                            </Typography>


                            <Button color="primary">Acceso clientes</Button>
                        </Toolbar>
                    </AppBar>
                </Box>
            </Container>

        </>
    )
}

export default Footer
