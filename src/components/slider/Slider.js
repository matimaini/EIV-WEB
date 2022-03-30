
import React from 'react'
import { Carousel } from 'react-bootstrap'

function slider() {

    return (
        <div style={{
            height: "100vh",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Carousel className="d-flex flex-column justify-content-center align-items-center" style={{
                height: '100%'
            }}>
                <Carousel.Item style={{justifyContent: 'center', alignItems: 'center', padding: '5em', height: '100%'}}>
                        <h1>ORIENTADO A LA GESTIÓN<br />
                            Y ADMINISTRACIÓN DE <b>SERVICIOS FINANCIEROS</b></h1>
                        <p>BRINDAMOS FUNCIONALIDAD Y FLEXIBILIDAD
                            <br />
                            QUE FACILITA NUESTRA ADAPTACIÓN
                            A LOS REQUISITOS  DE LOS DISTINTOS MERCADOS.</p>
                </Carousel.Item>
                <Carousel.Item style={{justifyContent: 'center', alignItems: 'center', padding: '5em', height: '100%'}}>
                    <h1><b>ASESORAMIENTO PERSONALIZADO</b></h1>
                    <p>ACOMPAÑAMOS A NUESTROS CLIENTES CON EJECUCIÓN DE NUEVAS TECNOLOGÍAS EN GESTIÓN FINANCIERA.</p>
                </Carousel.Item>
                <Carousel.Item style={{ justifyContent: 'center', alignItems: 'center', padding: '5em', height: '100%'}}>
                        <h1><b>SERVICE DEVELOPMENT</b></h1>
                        <p>EL EQUIPO DE DESARROLLO PROYECTA NUEVAS TÉCNICAS INNOVADORAS DONDE TRABAJA EN SINERGIA CON EL CLIENTE,
                            PARA ACORDAR ALTERNATIVAS BENEFICIOSAS, CON EL OBJETIVO DE OBTENER UNA ÓPTIMA RELACIÓN COSTO BENEFICIO.</p>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default slider
