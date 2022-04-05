import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { MenuProductos } from './menuProductos/menuProductos';
import { MenuBarra } from './menuBarra/menuBarra';
import { MenuRrhh } from './menuRrhh/menuRrhh';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const pages = [
    { id: 1, nombre: 'HOME', ref: 'home'},
    { id: 2, nombre: 'EMPRESA', ref: 'empresa' },
    { id: 3, nombre: 'PRODUCTOS', ref: 'productos' },
    { id: 4, nombre: 'CLIENTES', ref: 'clientes' },
    { id: 5, nombre: 'TALENTO HUMANO', ref: 'rrhh' },
    { id: 6, nombre: 'CONTACTO', ref: 'contacto'}
];

/* const settings = ['INGRESO CLIENTES',]; */

const BarraR = () => {
    const [anchorEl, setAnchorEl] = React.useState({
        navbar: null,
        productos: null,
        rrhh: null
    })

    const handleOpenAnchor = (event, target) => {
        setAnchorEl({...anchorEl, [target]: event.currentTarget})
    }

    const handleCloseAnchor = (target) => {
        setAnchorEl({...anchorEl, [target]: null})
    }

    const menuOpen = (menuType) => {
        let menu = null;

        switch(menuType) {
            case 'productos':
                menu = 'PRODUCTOS';
                break;
            case 'rrhh':
                menu = 'TALENTO HUMANO';
                break;
            default:
                menu = null;
                break;
        }

        return menu;
    }

    const menuIcon = (target) => {
        if(anchorEl[target]) {
            return <KeyboardArrowUpIcon />
        } else {
            return <KeyboardArrowDownIcon />
        }
    }

    return (
        <AppBar position="fixed" sx={{ backgroundColor: 'white' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* LOGO */}
                    <Typography
                        noWrap
                        component="div"
                        sx={{ m: 'auto', display: { xs: 'none', lg: 'flex' } }}
                    >
                        <img src="logos/eiv_color2.png" alt="logo" />
                    </Typography>
                    
                    {/* BOTONES XS */}
                    <MenuBarra 
                        menuOpen={menuOpen}
                        handleOpenAnchor={handleOpenAnchor}
                        handleCloseAnchor={handleCloseAnchor}
                        anchorEl={anchorEl?.navbar}
                        />
            
                    {/* BOTONES MD */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
                        {pages.map(page => {
                            return (
                                <Button
                                    href={`#${page.nombre === menuOpen(page.ref) ? null : page.ref}`}
                                    color="primary"
                                    key={page.id}
                                    onClick={page.nombre === menuOpen(page.ref) ? (e) => handleOpenAnchor(e, page.ref) : null}
                                    sx={{ my: 2, display: 'block' }}
                                >
                                    {page.nombre}
                                    {page.nombre === menuOpen(page.ref) ? menuIcon(page.ref) : null}
                                </Button>
                            )
                        })}
                    </Box>
                    
                    {/* DESPLEGABLE PRODUCTOS */}
                    <MenuProductos handleCloseAnchor={handleCloseAnchor} anchorEl={anchorEl.productos} />

                    {/* DESPLEGABLE DE RRHH */}
                    <MenuRrhh handleCloseAnchor={handleCloseAnchor} anchorEl={anchorEl.rrhh}/>

                    {/* ACCESO A CLIENTES */}
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', lg: 'flex' }, justifyContent: 'right' }}>
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