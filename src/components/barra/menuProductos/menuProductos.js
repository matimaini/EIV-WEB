import { Menu, MenuItem, Typography } from "@mui/material"

const productPages = [
    { id: 1, nombre: 'PORTAL VENDEDORES', ref:'#vendedores'},
    { id: 2, nombre: 'PORTAL CLIENTES', ref: '#portal-clientes'},
    { id: 3, nombre: 'ADMINISTRACION DE TARJETAS', ref:'#tarjetas'}
]

export const MenuProductos = ({handleCloseAnchor, anchorEl}) => {
    return(
        <Menu
            id="menu-productos"
            anchorEl={anchorEl}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'left', }}
            open={Boolean(anchorEl)}
            onClose={() => handleCloseAnchor('productos')}
            sx={{marginLeft: {xs: '190px'}, marginTop: {xs: '-35px'}, m: {lg:'auto'}, display: { xs: 'block', lg: 'block' }}}
        >
            {productPages.map(product => (
                <MenuItem 
                    key={product.id}
                    component="a" 
                    href={product.ref} 
                    paddingtop={'0.2em'}
                    paddingbottom={'0.2em'}
                    onClick={() => handleCloseAnchor('productos')}
                >
                    <Typography
                        fontSize={'0.9rem'}
                        textAlign={'left'}
                        color={'primary'}
                        sx={{
                            width: '100%',
                            wordWrap: 'break-word',
                            overflowWrap: 'break-word',
                            whiteSpace: 'break-spaces'
                         }}
                    >                                     
                        {product.nombre}
                    </Typography>
                </MenuItem>                
            ))}
        </Menu>
    )
}