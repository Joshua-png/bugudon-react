import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


export default function BenefitCards(){
    return(
        <div className="row mt-2 mb-3">
          <div className="col-md-4 pl-0 pr-0">
            <div className="shadow card border-0 h-100">
              <Carousel className="carousel-inner" style={{height:200}}> 
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="static/img/virgyl-sowah-E9NPWGBXM9o-unsplash.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="static/img/host_community.png"
                    alt="First slide"
                    />
                </Carousel.Item>
                </ Carousel>

              <div className="card-body pl-2 pr-2 pt-0">
                <h5 className="card-title text-center font-weight-bold mb-0">Host Community</h5>
                <div className="card-text mb-0"><ol className="pl-3 text-justify list-div pt-0 ">
                  <li>The creation of wealth within the local host community in terms of direct and indirect jobs;</li>
                  <li>Development of social amenities and infrastructure by Government, NGO’s,
                    and private entities due to increased economic activities in the area;</li>
                  <li>Proper management of the environmental issues associated with
                    mining under the supervision of the EPA.</li>
                </ol></div>
              </div>
            </div>
          </div>
          <div className="col-md-4 zero-pr">
            <div className="shadow card h-100 border-0">
              <img className="card-img-top" src="static/img/ghana.png" alt="Card cap" style={{height:200}} />
              <div className="card-body pl-2 pr-2 pt-0">
                <h5 className="card-title text-center font-weight-bold mb-0">Host Government</h5>
                <div className="card-text mb-0"><ol className="pl-3 text-justify list-div pt-0 ">
                  <li>Increase government revenues from the area via applicable taxes, royalties, and levies;</li>
                  <li>Increase foreign direct investment into Ghana;</li>
                  <li>Increase foreign exchange reserves to support the local currency.</li>
                </ol></div>
              </div>
            </div>
          </div>

          <div className="col-md-4 zero-pr">
            <div className="shadow card h-100 border-0">
              <Carousel className="carousel-inner" style={{height:200}}> 
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="static/img/internal_stakeholders.png"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="static/img/paddle-wheel-1051962_1280.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                </ Carousel>
              <div className="card-body pl-2 pr-2 pt-0">
                <h5 className="card-title pt-0 text-center font-weight-bold mb-0">Internal Stakeholders</h5>
                <div className="card-text mb-0"><ol className="pl-3 text-justify list-div pt-0">
                  <li>The generation returns for the proponents of the company;</li>
                  <li>The generation of work for both employee and vendor of the proposed project.</li>
                </ol></div>
              </div>
            </div>
          </div>
        </div>
    );
}