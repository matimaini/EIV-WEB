
import React from 'react'
import { Carousel } from 'react-bootstrap'


function slider() {

    return (
        <div sx={{
            m: "auto", minHeight: "100vh",
            verticalAlign: "center",
            alignContent: "center"
        }}>


            <Carousel sx={{
                flexGrow: 1,

            }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="logos/img_redes_para_fondo_celeste.png"
                        alt="Fondo"
                    />
                    <Carousel.Caption sx={{
                        textAlign: 'left',
                        justifyContent: 'space-around'
                    }} >
                        <h1>ORIENTADO A LA GESTIÓN<br />
                            Y ADMINISTRACIÓN DE <b>SERVICIOS FINANCIEROS</b></h1>
                        <p>BRINDAMOS FUNCIONALIDAD Y FLEXIBILIDAD
                            <br />
                            QUE FACILITA NUESTRA ADAPTACIÓN
                            A LOS REQUISITOS  DE LOS DISTINTOS MERCADOS.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="logos/img_redes_para_fondo_celeste.png"
                        alt="Fondo"
                        
                    />

                    <Carousel.Caption>
                        <h1><b>ASESORAMIENTO PERSONALIZADO</b></h1>
                        <p>ACOMPAÑAMOS A NUESTROS CLIENTES CON EJECUCIÓN DE NUEVAS TECNOLOGÍAS EN GESTIÓN FINANCIERA.</p>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="logos/img_redes_para_fondo_celeste.png"
                        alt="Fondo"
                    />

                    <Carousel.Caption>
                        <h1><b>SERVICE DEVELOPMENT</b></h1>
                        <p>EL EQUIPO DE DESARROLLO PROYECTA NUEVAS TÉCNICAS INNOVADORAS DONDE TRABAJA EN SINERGIA CON EL CLIENTE,
                            PARA ACORDAR ALTERNATIVAS BENEFICIOSAS, CON EL OBJETIVO DE OBTENER UNA ÓPTIMA RELACIÓN COSTO BENEFICIO.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default slider
