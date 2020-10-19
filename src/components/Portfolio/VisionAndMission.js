import React from 'react';
import AOS from "aos";
import SectionTitle from '../Home/SectionTitle';

// initialization
AOS.init();


export default function VisionAndMission(){
    return(
        <section id="vision-mission" className="bg-warning pb-3" style={{borderTop: '2px solid black'}}>
            <div className="pt-3">
               <SectionTitle 
                  title="VISION AND MISSION"
               />
            </div>
            <div className="container-fluid pl-0 pr-0" style={{paddingTop:100, paddingBottom:100,backgroundImage:"url('static/img/dominik-vanyi-Mk2ls9UBO2E-unsplash.jpg')", backgroundSize:'cover'}}>
            <div className="container">
                <div className="row">
                <div className="col-md-4">
                    <div className="card border-0 mb-3 text-center" data-aos="fade-up">
                    <div className="card-header h3 font-weight-bold text-white" style={{backgroundColor:'black'}}>Vision</div>
                    <div className="card-body">
                        <p className="card-text" style={{lineHeight:1.3}}>To build a world-className listed mining firm with a chain of large-scale mines across Ghana and West Africa.<br /><br /></p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border-0 mb-3 text-center" data-aos="fade-up" data-aos-delay="200">
                    <div className="card-header h3 font-weight-bold text-white" style={{backgroundColor:'black'}}>Mission</div>
                    <div className="card-body">
                        <p className="card-text" style={{lineHeight:1.3}}>To progressively harness best philosophies, practices, tools, partnerships, and resources to grow the company’s mining and process capability.</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border-0 mb-3 text-center" data-aos="fade-up" data-aos-delay="400">
                    <div className="card-header h3 font-weight-bold text-white" style={{backgroundColor:'black'}}>Values</div>
                    <div className="card-body">
                        <p className="card-text" style={{lineHeight:1.3}}>Professionalism<br />
                            Integrity <br />
                            Efficiency <br />
                            Environmentally friendly approach<br />
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
                    
        </section>    
    );
}