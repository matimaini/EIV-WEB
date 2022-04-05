import { Box, IconButton, Menu, MenuItem, Typography, Tooltip, Button } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const pages = [
    { id: 1, nombre: 'HOME', ref: 'home'},
    { id: 2, nombre: 'EMPRESA', ref: 'empresa' },
    { id: 3, nombre: 'PRODUCTOS', ref: 'productos' },
    { id: 4, nombre: 'CLIENTES', ref: 'clientes' },
    { id: 5, nombre: 'TALENTO HUMANO', ref: 'rrhh' },
    { id: 6, nombre: 'CONTACTO', ref: 'contacto'}
];

export const MenuBarra = ({handleOpenAnchor, anchorEl, handleCloseAnchor, menuOpen}) => {
    return(
        <>
            <Box sx={{ width:'100%', align: 'center', justifyContent: 'space-between', flexGrow: 0, display: { xs: 'flex', lg: 'none' }}}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={(e) => handleOpenAnchor(e, 'navbar')}
                    color="inherit"
                >
                    {anchorEl ? <CloseIcon /> : <MenuIcon />}
                </IconButton>

                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'left', }}
                    open={Boolean(anchorEl)}
                    onClose={() => handleCloseAnchor('navbar')}
                    sx={{ m: 'auto', display: { xs: 'block', lg: 'none' }, }}
                >
                    {pages.map(page => {
                        return (
                            <MenuItem 
                                key={page.id} 
                                component='a' 
                                href={page.nombre === menuOpen(page.ref) ? null : `#${page.ref}`} 
                                onClick={page.nombre === menuOpen(page.ref)? (e) => handleOpenAnchor(e,  page.ref) : () => handleCloseAnchor('navbar')}
                            >
                                <Typography fontSize="0.9rem" textAlign="center" color="primary" >
                                    {page.nombre} 
                                    {page.nombre === menuOpen(page.ref) ? <ChevronRightIcon />: null }
                                </Typography>
                            </MenuItem>
                        )
                    })}
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', lg: 'none' }, justifyContent: 'center' }}>
                        <Tooltip title="En construccion">
                            <Button color="info" width='100%' variant='outlined' >Acceso clientes</Button>
                        </Tooltip>
                    </Box>
                </Menu>

                <Typography
                    noWrap
                    component="div"
                    sx={{ justifyContent: 'right', display: { xs: 'flex', lg: 'none' } }}
                >
                    <img src="logos/eiv_color2.png" alt="logo" sx={{ justifyContent: 'space-between', }} />
                </Typography>
            </Box>

        </>
    )
}