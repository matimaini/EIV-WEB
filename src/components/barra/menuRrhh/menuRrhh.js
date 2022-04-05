import { Menu, MenuItem, Typography } from "@mui/material"

export const MenuRrhh = ({anchorEl, handleCloseAnchor}) => {
    return(
        <>
            <Menu
                id="menu-rrhh"
                anchorEl={anchorEl}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'left', }}
                open={Boolean(anchorEl)}
                onClose={() => handleCloseAnchor('rrhh')}
                sx={{marginLeft: {xs: '190px'}, marginTop: {xs: '-35px'}, m: {lg:'auto'}, display: { xs: 'block', lg: 'block' }}}
            >
                <MenuItem component="a" href={'#rrhh'} onClick={() => handleCloseAnchor('rrhh')}>
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
                        DEJANOS TU CV
                    </Typography>
                </MenuItem>

                <MenuItem component="a" href={'#busquedas'} onClick={() => handleCloseAnchor('rrhh')}>
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
                        BUSQUEDAS LABORALES
                    </Typography>
                </MenuItem>
            </Menu>
        </>
    )
}