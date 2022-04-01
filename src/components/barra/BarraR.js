import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


const pages = [
    { id: 1, nombre: 'HOME', ref: '#home' },
    { id: 2, nombre: 'EMPRESA', ref: '#empresa' },
    { id: 3, nombre: 'PRODUCTOS', ref: '#productos' },
    { id: 4, nombre: 'CLIENTES', ref: '#clientes' },
    { id: 5, nombre: 'TALENTO HUMANO', ref: '#rrhh' },
    { id: 6, nombre: 'CONTACTO', ref: '#contacto' }
];

/* const settings = ['INGRESO CLIENTES',]; */

const BarraR = () => {



    const [anchorElNav, setAnchorElNav] = React.useState(null);
    /* const [anchorElUser, setAnchorElUser] = React.useState(null); */

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    /* const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    }; */

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    /* const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    }; */

    return (
        <AppBar position="fixed" sx={{ backgroundColor: 'white' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* LOGO */}
                    <Typography
                        noWrap
                        component="div"
                        sx={{ m: 'auto', display: { xs: 'none', md: 'flex' } }}
                    >
                        <img src="logos/eiv_color2.png" alt="logo" />
                    </Typography>

                    {/* BOTONES XS */}
                    <Box sx={{ width:'100%', align: 'center', justifyContent: 'space-between', flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >

                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'left', }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ m: 'auto', display: { xs: 'block', md: 'none' }, }}
                        >

                            {pages.map(page => {
                                return (
                                    <MenuItem key={page.id} component='a' href={page.ref} onClick={handleCloseNavMenu} >
                                        <Typography textAlign="center" color="primary" >{page.nombre}</Typography>
                                    </MenuItem>

                                )
                            })}
                        </Menu>

                        <Typography
                            noWrap
                            component="div"
                            sx={{ justifyContent: 'right', display: { xs: 'flex', md: 'none' } }}
                        >
                            <img src="logos/eiv_color2.png" alt="logo" sx={{ justifyContent: 'space-between', }} />
                        </Typography>

                    </Box>
                    {/* BOTONES MD */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {pages.map(page => {
                            return (
                                <Button
                                    href={page.ref}
                                    color="primary"
                                    key={page.id}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, display: 'block' }}
                                >
                                    {page.nombre}
                                </Button>

                            )
                        })}
                    </Box>
                    {/* ACCESO A CLIENTES */}
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, justifyContent: 'right' }}>
                        <Tooltip title="En construccion">
                            <Button color="info" variant='outlined' >Acceso clientes</Button>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default BarraR