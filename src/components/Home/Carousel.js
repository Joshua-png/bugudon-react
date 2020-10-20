import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  CarouselContent  from "../../contentJSON/homeCarouselTop.json";

export default function Carousels(){
    return(
            <section id="intro">    
            <Carousel className="img-hidden">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={CarouselContent.image1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={CarouselContent.image2}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-3"
                    src={CarouselContent.image3}
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>

                <div className="row ml-0 mr-0 logo-info">
                    <div className="col-md-2 text-white p-2 text-center vision-heading-col">
                        <h6 className="intro-text">Our Vision</h6>
                    </div>
                    <div className="col-md-10 bg-warning p-2 text-center cursive-heading ">
                    <h6 className="intro-text">{CarouselContent.vision}</h6>
                    </div>
                </div>

            </section>
    );
}