import React from 'react';
import AOS from "aos";
import SectionTitle from '../Home/SectionTitle';

// initialization
AOS.init();


export default function VisionAndMission(){
    return(
        <section id="vision-mission" class="bg-warning pb-3" style={{borderTop: '2px solid black'}}>
            <div className="pt-3">
               <SectionTitle 
                  title="VISION AND MISSION"
               />
            </div>
            <div class="container-fluid pl-0 pr-0" style={{paddingTop:100, paddingBottom:100,backgroundImage:"url('static/img/dominik-vanyi-Mk2ls9UBO2E-unsplash.jpg')", backgroundSize:'cover'}}>
            <div class="container">
                <div class="row">
                <div class="col-md-4">
                    <div class="card border-0 mb-3 text-center" data-aos="fade-up">
                    <div class="card-header h3 font-weight-bold text-white" style={{backgroundColor:'black'}}>Vision</div>
                    <div class="card-body">
                        <p class="card-text" style={{lineHeight:1.3}}>To build a world-class listed mining firm with a chain of large-scale mines across Ghana and West Africa.<br /><br /></p>
                    </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-0 mb-3 text-center" data-aos="fade-up" data-aos-delay="200">
                    <div class="card-header h3 font-weight-bold text-white" style={{backgroundColor:'black'}}>Mission</div>
                    <div class="card-body">
                        <p class="card-text" style={{lineHeight:1.3}}>To progressively harness best philosophies, practices, tools, partnerships, and resources to grow the company’s mining and process capability.</p>
                    </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-0 mb-3 text-center" data-aos="fade-up" data-aos-delay="400">
                    <div class="card-header h3 font-weight-bold text-white" style={{backgroundColor:'black'}}>Values</div>
                    <div class="card-body">
                        <p class="card-text" style={{lineHeight:1.3}}>Professionalism<br />
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