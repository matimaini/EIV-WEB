import React, { Fragment } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import BarraR from '../../barra/Barra'
import Slider from '../../slider/Slider';
import Empresa from "../../empresa/Empresa";
import Contacto from "../../contacto/Contacto";
import Busquedas from "../../busquedas/Busquedas";
import Rrhh from "../../rrhh/Rrhh";
import Clientes from "../../clientes/Clientes";
import Producto from "../../producto/Producto";
import Footer from '../../footer/Footer';
import { productosData } from "../../../data/productosData";
import theme from '../../../theme/theme'

export default function PageComponent() {
  const Productos = () => {
    return(
      <>
        {productosData.map(producto => (
          <Fragment key={producto.id}>
            <a name={producto.name} href={`#${producto.name}`}> </a>
            <Producto 
              fondo={producto.fondo} 
              titulo={producto.titulo} 
              data={producto.data} 
              imagen={producto.imagen} 
              colorfondo={producto.colorFondo} 
            />
          </Fragment>
        ))}
      </>
    )
  }  

  const routes = [ 
    { Component: Slider, name: 'home', id: 1},
    { Component: Empresa, name: 'empresa', id: 2},
    { Component: Productos, name: 'productos', id: 3},
    { Component: Clientes, name: 'clientes', id: 4},
    { Component: Rrhh, name: 'rrhh', id: 5},
    { Component: Busquedas, name: 'busquedas', id: 6},
    { Component: Contacto, name: 'contacto', id: 7},
    { Component: Footer, name: 'footer', id: 8}
  ]  

  return (
    <ThemeProvider theme={theme}>
        <BarraR />
        { routes.map(({Component, name, id}) => (
          <Fragment key={id}>
            <a name={name} href={`#${name}`}> </a>
            <Component />
          </Fragment>
        ))}
    </ThemeProvider>
  )  
}