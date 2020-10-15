import React from 'react';
import Carousels from '../Carousel/Carousels';
import SectionTitle from '../Home/SectionTitle';
import Intro from './Intro';
import Title from './Title';
import CompleteImgDes from './CompleteImgDes';

export default function Projects(){
    return(
      <main id="main">  
        <Carousels 
          source1 = "static/img/999-fineness-gold-bars-gold-wealth.jpg"
          source2 = "static/img/bullion-gold-gold-bars-golden-47047.jpg"
          source3 = "static/img/golden-3346988_1280.jpg"
          />
        <div className="pt-2">
          <SectionTitle title="OUR PROJECTS"/>
        </div>  
        <Intro />
        <Title text="BUGUDON LIMITED ASSOCIATED PROJECTS" />
        <CompleteImgDes />
        
        
      </main>   



    )
}