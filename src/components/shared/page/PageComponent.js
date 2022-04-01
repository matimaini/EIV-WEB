import { ThemeProvider } from "@emotion/react"
import { createTheme } from "@mui/material";
import Barra from '../barra/Barra'
import Slider from '../../slider/Slider';
import Empresa from "../../empresa/Empresa";
import Contacto from "../../contacto/Contacto";
import Busquedas from "../../busquedas/Busquedas";
import Rrhh from "../../rrhh/Rrhh";
import Clientes from "../../clientes/Clientes";
import Producto from "../../producto/Producto";
import { productosData } from "../../../data/productosData";

export const PageComponent = () => {
    const theme = createTheme({
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
      
      theme.typography.h4 = {
        fontSize: '2rem',
        '@media(max-width: 640px)': {
          fontSize: '1.75rem'
        }
    }

    const Productos = () => {
      return(
        <>
          {productosData.map(producto => (
            <Producto 
              key={producto.id}
              fondo={producto.fondo} 
              titulo={producto.titulo} 
              data={producto.data} 
              imagen={producto.imagen} 
              colorfondo={producto.colorFondo} 
            />
          ))}
        </>
      )
    }

    const routes = [ 
      { Component: Slider, name: 'home'},
      { Component: Empresa, name: 'empresa'},
      { Component: Productos, name: 'productos'},
      { Component: Clientes, name: 'clientes'},
      { Component: Rrhh, name: 'rrhh'},
      { Component: Busquedas, name: 'busquedas'},
      { Component: Contacto, name: 'contacto'}
    ]

    return (
        <ThemeProvider theme={theme}>
            <Barra />
            { routes.map(({Component, name}) => (
              <>
                <a name={name} href={`#${name}`}></a>
                <Component />
              </>
            ))}
        </ThemeProvider>
    )
}