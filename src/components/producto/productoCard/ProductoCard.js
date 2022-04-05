import { Card, CardContent, Typography, CardMedia } from "@mui/material"
import { Box } from "@mui/system"

export const ProductoCard = ({data, showImg, imagen}) => {
    const style = {
        img: showImg => ({
            display: showImg ? 'none' : 'inline'
        })
    }

    return(
        <>
            <Box sx={{
                    textAlign: 'left',
                    borderLeft: 10,
                    borderColor: 'text.primary',
                    padding: '16px 0 16px 16px'
                    }}>
                    <Card sx={{ display: 'flex', bgcolor: 'transparent', boxShadow: 'none', verticalAlign: 'middle' }}>
                        <Box sx={{}}>
                            <CardContent sx={{ flex: '1 0 auto', justifyContent: 'center', padding: '16px 0 16px 16px' }}>
                                <Typography
                                    variant="h6"
                                    component="div"
                                    align="left"
                                    sx={{
                                        flexGrow: 1,
                                        fontFamily: 'Montserrat',
                                        verticalAlign: "middle"
                                    }}>
                                    {data}
                                </Typography>
                            </CardContent>
                        </Box>
                        <CardMedia 
                            style={style.img(showImg)} 
                            sx={{ width: 'auto', height: 'auto', maxWidth: 140, maxHeight: 140, m: 'auto' }}
                            component="img"
                            image={imagen}
                        />
                    </Card>
            </Box>
        </>
    )
}