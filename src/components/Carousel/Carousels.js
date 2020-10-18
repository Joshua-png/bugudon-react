import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Carousels({source1,source2,source3}){
    return(   
        <Carousel className="img-hidden-contact" nextIcon={false} prevIcon={false}>
            <Carousel.Item>
                <img
               
                className="d-block w-100 change"
                src={source1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                
                className="d-block w-100 change"
                src={source2}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
              
                className="d-block w-100 change"
                src={source3}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
    )
}