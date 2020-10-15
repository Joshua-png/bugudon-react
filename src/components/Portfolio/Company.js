import React from 'react';
import Carousels from '../Carousel/Carousels';
import SectionTitle from '../Home/SectionTitle';
import Story from './Story';
import VisionAndMission from './VisionAndMission';
import Leadership from './Leadership';

export default function Company(){
    return(
      <React.Fragment>  
            <Carousels
                source1 ="static/img/excavators-1050501_1280.jpg"
                source2 ="static/img/company_1.png"
                source3 = "static/img/paddle-wheel-1051962_1280smaller.png"
            />
            <div className="pt-3"> 
               <SectionTitle title="OUR STORY"/>
            </div>
            <Story />
            <VisionAndMission />
            <Leadership />
            
        </React.Fragment>
    )
}