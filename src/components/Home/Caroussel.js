import React from 'react';

export default function Carousel(){
    return(
        <section id="intro">

            {/* carousel */}
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner img-hidden">
                <div className="carousel-item active">
                <img src="static/img/dominik-vanyi-1HEDPbH6HIE-unsplashsmaller1.png" className="img-fluid w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="static/img/hasin-hayder-974UGD5ov44-unsplash.jpg" className="img-fluid w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="static/img/dominik-vanyi-Mk2ls9UBO2E-unsplashsmaller.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <a className="carousel-control-prev mt-3" href="#carouselExampleFade" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next mt-3" href="#carouselExampleFade" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
            {/* end carousel */}


            <div className="row ml-0 mr-0">
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