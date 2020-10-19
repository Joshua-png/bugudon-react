import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Carousels(){
    return(
            <section id="intro">    
            <Carousel className="img-hidden">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="static/img/hasin-hayder-974UGD5ov44-unsplash.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="static/img/dominik-vanyi-1HEDPbH6HIE-unsplashsmaller1.png"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-3"
                    src="static/img/dominik-vanyi-Mk2ls9UBO2E-unsplashsmaller.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>

                <div className="row ml-0 mr-0 logo-info">
                    <div className="col-md-2 text-white p-2 text-center vision-heading-col">
                        <h6 className="intro-text">Our Vision</h6>
                    </div>
                    <div className="col-md-10 bg-warning p-2 text-center cursive-heading ">
                        <h6 className="intro-text">To build a world-className listed mining firm with a chain of large-scale mines across Ghana and West Africa.</h6>
                    </div>
                </div>

            </section>
    );
}