import PortalClientes from '../assets/logos/PORTAL_CLIENTES.png';
import PortalVendedores from '../assets/logos/PORTAL_VENDEDORES_B.png';
import Tarjetas from '../assets/logos/ADM_TARJETAS_B.png';
import Fondo from '../assets/logos/img_contenido_redesb.png';
import FondoI from '../assets/logos/img_contenido_redesc.png';

export const productosData = [
    {
        id: 1,
        fondo: FondoI,
        titulo: "PORTAL VENDEDORES",
        data: "PLATAFORMA ONLINE DONDE PERMITIRA REALIZAR GESTION DE PRESTAMOS DESDE UNA BASE EXTERNA",
        imagen: PortalVendedores,
        name: "vendedores"
    },
    {
        id: 2,
        fondo: Fondo,
        colorFondo: '#373C46',
        titulo: "PORTAL CLIENTES",
        data: "PLATAFORMA ONLINE DISEÑADA CON EL FIN DE ACOMPAÑAR Y ADMINISTRAR LOS MOVIMIENTOS DE TUS ASOCIADOS",
        imagen: PortalClientes,
        name: "portal-clientes"
    }, 
    {
        id: 3,
        fondo: FondoI,
        titulo: "ADMINISTRACION DE TARJETAS",
        data: "PARA SUMAR A TU COMBO DE PRODUCTOS, LA GESTION DE TARJETAS DE CREDITO. NUESTRO SOFTWARE CUENTA CON UN MODULO COMPLETO PARA DICHA ADMINISTRACION",
        imagen: Tarjetas,
        name: "tarjetas"
    },
]