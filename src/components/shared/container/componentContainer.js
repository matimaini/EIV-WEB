import Container from '@mui/material/Container';

export const ComponentContainer = ({bgColor, bgImg, children}) => {
    return (
        <Container
            maxWidth="100%" 
            align="center"
            justify="center"
            direction="column"
            sx={{
                paddingTop: '5em',
                paddingBottom: '5em',
                backgroundColor: bgColor,
                minHeight: "100vh",
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: `url(${bgImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
            }} 
        >
            {children}
        </Container>
    )
}
