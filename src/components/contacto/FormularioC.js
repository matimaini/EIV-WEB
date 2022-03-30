import { Autocomplete, Fab, FormControl, TextField } from '@mui/material'
import NavigationIcon from '@mui/icons-material/Navigation'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const FormularioC = () => {

    const Productos = [
        { name: 'vendedores', label: 'Portal vendedores', value: 'PortalVendedores' },
        { name: 'portalCli', label: 'Portal clientes', value: 'PortalClientes' },
        { name: 'Tarjetas', label: 'Administracion de tarjetas', value: 'Tarjetas' },
        { name: 'financiero', label: 'Sistema financiero', value: 'financiero' }
    ];

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    
    const [producto, setProducto] = React.useState(Productos[0]);
    const [inputValue, setInputValue] = React.useState('');

    const [datos, setDatos] = useState({
        nombre: '',
        empresa: '',
        telefono: '',
        celular: '',
        domicilio: '',
        localidad: '',
        provincia: '',
        pais: '',
        email: '',
        comentario: ''
    })

    /* 
      const [nombre, setNombre] = useState("")
      const [empresa, setEmpresa] = useState("")
      const [telefono, setTelefono] = useState("")
      const [celular, setCelular] = useState("")
      const [domicilio, setDomicilio] = useState("")
      const [localidad, setLocalidad] = useState("")
      const [provincia, setProvincia] = useState("")
      const [pais, setPais] = useState("")
      const [email, setEmail] = useState("")
      const [producto, setProducto] = useState("")
      const [comentario, setComentario] = useState("")
       */

     const enviarDatos = (event) => {
         event.preventDefault()

         console.log('enviando datos... nombre:' + datos.nombre + ' empresa :' + datos.empresa + ' cel: ' + datos.celular
             + ' Domicilio: ' + datos.domicilio + ' localidad: ' + datos.localidad + ' Provincia: ' + datos.provincia + ' Pais: ' + datos.pais
             + ' Email: ' + datos.email + ' Producto: ' + producto.value + ' Comentario: ' + datos.comentario)
        
        
             

     }

    return (

        <FormControl
            sx={{
                textAlign: 'center', display: 'grid',

                flexWrap: 'wrap',
                '& .MuiTextField-root': { m: 1, minWidth: '24ch', maxWidth: '50ch', /* backgroundColor: '#385E70', */ borderTopLeftRadius: 10, borderTopRightRadius: 10 },
                '& .MuiInputLabel-root': { fontWeight: '1rem', borderTopLeftRadius: 10, borderTopRightRadius: 10 },
                '& .MuiAutocomplete': { m: 1, maxWidth: '50ch', /* backgroundColor: '#385E70', */ borderTopLeftRadius: 10, borderTopRightRadius: 10 },
                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },


            }}
        >
            <Autocomplete
                disablePortal
                id="Producto"
                options={Productos}
                value={producto}
                inputValue={inputValue}
                onChange={(event, newValue) => { setProducto(newValue);  }}
                onInputChange={(event, newInputValue) => { setInputValue(newInputValue); }}
                name="producto"
                renderInput={(params) => <TextField {...params} label="Producto" />}
            />
            <TextField required variant="filled" color="secondary" onChange={handleInputChange} name="nombre" label="Nombre y apellido" sx={{ color: 'text.primary' }} />
            <TextField required variant="filled" color="secondary" onChange={handleInputChange} name="empresa" label="Empresa" sx={{ color: 'text.primary' }} />
            <div>
                <TextField required variant="filled" color="secondary" onChange={handleInputChange} name="telefono" label="Teléfono" type='number' />
                <TextField variant="filled" color="secondary" onChange={handleInputChange} name="celular" label="Celular" type='number' />
            </div>
            <div>
                <TextField variant="filled" color="secondary" onChange={handleInputChange} name="domicilio" label="Domicilio" />
                <TextField variant="filled" color="secondary" onChange={handleInputChange} name="localidad" label="Localidad" />
            </div>
            <div>
                <TextField variant="filled" color="secondary" onChange={handleInputChange} name="provincia" label="Provincia" />
                <TextField variant="filled" color="secondary" onChange={handleInputChange} name="pais" label="Pais" />
            </div>
            <TextField required variant="filled" color="secondary" onChange={handleInputChange} name="email" label="Email" type='email' />
            <TextField required variant="filled" color="secondary" onChange={handleInputChange} name="comentario" label="Comentarios"
                id="outlined-textarea"
                placeholder="Placeholder"
                multiline />

            <Box sx={{ justifyContent: 'space-around', p: 2, display: 'block' }}>

            <Fab variant="extended"
                      color="secondary"
                      aria-label="add"
                      elementtype="submit"
                      component="span"
                      type='submit'
                      onClick={enviarDatos}
                      sx={{ m: 2 }}
                    >
                      <NavigationIcon />
                      Enviar formulario
                    </Fab>

            </Box>
        </FormControl>


    )
}

export default FormularioC