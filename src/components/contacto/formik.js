import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import { Button, TextField } from '@mui/material';



const FormularioFormik = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

    const formik = useFormik({
        initialValues: {
            nombre: '',
            empresa:'',
            telefono:'',
            celular: '',
            domicilio: '',
            localidad: '',
            provincia: '',
            pais: '',
            email: '',
            comentario:'',
        },
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });

	return (
		<>
			<Formik
				initialValues={{
					nombre: 'Su nombre',
                    empresa:'',
                    telefono:'',
                    celular: '',
                    domicilio: '',
                    localidad: '',
                    provincia: '',
                    pais: '',
					email: '',
                    comentario:'',
				}}
				validate={(valores) => {
					let errores = {};

					// Validacion nombre
					if(!valores.nombre){
						errores.nombre = 'Por favor ingresa un nombre'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre = 'El nombre solo puede contener letras y espacios'
					}

					// Validacion correo
					if(!valores.email){
						errores.email = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
						errores.email = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}

					return errores;
				}}
				onSubmit={(valores, {resetForm}) => {
					
					console.log('Formulario enviado');

					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 5000);
				}}
			>
				{( {errors} ) => (
					<Form className="formulario">
						
						
                        <TextField required variant="filled" color="secondary" name="nombre" label="Nombre y apellido" sx={{ color: 'text.primary' }} />
                        <TextField required variant="filled" color="secondary" name="empresa" label="Empresa" sx={{ color: 'text.primary' }} />
                        <div>
                            <TextField required variant="filled" color="secondary"  name="telefono" label="Teléfono" type='number' />
                            <TextField          variant="filled" color="secondary"  name="celular" label="Celular" type='number' />
                        </div>
                        <div>
                            <TextField variant="filled" color="secondary"  name="domicilio" label="Domicilio" />
                            <TextField variant="filled" color="secondary"  name="localidad" label="Localidad" />
                        </div>
                        <div>
                            <TextField variant="filled" color="secondary"  name="provincia" label="Provincia" />
                            <TextField variant="filled" color="secondary"  name="pais" label="Pais" />
                        </div>
                        <TextField required variant="filled" color="secondary"  name="email" label="Email" type='email' />
                        <TextField required variant="filled" color="secondary"  name="comentario" label="Comentarios"
                            id="outlined-textarea"
                            placeholder="Placeholder"
                            multiline />

                       

						<button type="submit">Enviar</button>
						
					</Form>
				)}
			</Formik>
		</>
	);
}
 
export default FormularioFormik;