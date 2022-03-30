
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barra from './components/barra/Barra';
import Slider from './components/slider/Slider';
import Empresa from './components/empresa/Empresa'
import Clientes from './components/clientes/Clientes'
import Producto from './components/producto/Producto';
import PortalClientes from '../src/assets/logos/PORTAL_CLIENTES.png';
import PortalVendedores from '../src/assets/logos/PORTAL_VENDEDORES_B.png';
import Tarjetas from '../src/assets/logos/ADM_TARJETAS_B.png';
import Fondo from '../src/assets/logos/img_contenido_redesb.png';
import FondoI from '../src/assets/logos/img_contenido_redesc.png';
import Container from '@mui/material/Container';
import Rrhh from './components/rrhh/Rrhh';
import Busquedas from './components/busquedas/Busquedas';
import Contacto from './components/contacto/Contacto';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import "./animate.css"

const ThemeC = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#36a9df',
    },
    secondary: {
      main: '#FFFFFF',
    },
    background: {
      paper: '#373c46',
      default: '#969494',
    },
    text: {
      primary: '#ffffff',
      secondary: '#000000',
    },
  },
});


function App() {


  return (

    <div className="App">
      <>
        
        <a name="home" href='#home'> </a>
        
          <ThemeProvider theme={ThemeC}>
            <Barra />
            <Container maxWidth="100%" sx={{
              minHeight: "100vh",
              verticalAlign: "center",
              alignContent: "center"
            }} >
              <Slider class="slide" />
            </Container>
            <a name="Empresa" href='#empresa'> </a>
            <Empresa

              titulo="NUESTRA EMPRESA"
              fondo={Fondo}
              colorfondo="#373C46"
            />

            <a name="productos" href='#productos'> </a>

            <Producto

              fondo={FondoI}
              titulo="PORTAL VENDEDORES"
              data="PLATAFORMA ONLINE DONDE PERMITIRA REALIZAR GESTION DE PRESTAMOS DESDE UNA BASE EXTERNA"
              imagen={PortalVendedores}
            />

            <Producto
              fondo={Fondo}
              titulo="PORTAL CLIENTES"
              data="PLATAFORMA ONLINE DISEÑADA CON EL FIN DE ACOMPAÑAR Y ADMINISTRAR LOS MOVIMIENTOS DE TUS ASOCIADOS"
              imagen={PortalClientes}
              colorfondo="#373C46"
            />

            <Producto
              fondo={FondoI}
              titulo="ADMINISTRACION DE TARJETAS"
              data="PARA SUMAR A TU COMBO DE PRODUCTOS, LA GESTION DE TARJETAS DE CREDITO.
              NUESTRO SOFTWARE CUENTA CON UN MODULO COMPLETO PARA DICHA ADMINISTRACION."
              imagen={Tarjetas}
            />

            <a name="clientes" href='#clientes'> </a>
            <Clientes
              titulo="ALGUNOS DE NUESTROS CLIENTES"
              fondo={Fondo}
              colorfondo="#373C46"
            />

            <a name="rrhh" href='#rrhh'> </a>

            <Rrhh
              titulo="TALENTO HUMANO"
              fondo={FondoI}
            />


            <a name="busquedas" href='#busquedas'> </a>
            <Busquedas
              titulo="BUSQUEDAS LABORALES"
              fondo={Fondo}
              colorfondo="#373C46" />
            <a name="contacto" href='#contacto'> </a>
            <Contacto
              titulo="CONTACTO"
              fondo={FondoI}
            />
          </ThemeProvider>
      
      </>
    </div>
  );
}

export default App;



