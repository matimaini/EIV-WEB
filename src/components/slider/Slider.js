import React from 'react'
import { Carousel } from 'react-bootstrap'
import { sliderData } from '../../data/sliderData'
import Fondo from '../../assets/logos/img_redes_para_fondo_celeste.png'
import { ComponentContainer } from '../shared/container/componentContainer';

function slider() {
    return (
       <ComponentContainer bgImg={Fondo}>
            <Carousel 
                className="d-flex flex-column-reverse justify-content-center align-items-center" 
                style={{
                    height: '500px', 
                    width: '100%',
                    position: 'relative',
                }}
            >
                { sliderData.map(slide => (
                    <Carousel.Item
                        key={slide.id}
                        style={{
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            height: '100%'
                        }}>
                        {slide.text}
                    </Carousel.Item>
                ))}        
            </Carousel>
        </ComponentContainer>
    )
}

export default slider
