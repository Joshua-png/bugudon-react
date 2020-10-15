import React from 'react';

export default function ProjectDescrip({img_src,topic,description}){
    return(
     <div class="container pt-3"> 
        <div class="row" style={{paddingBottom:35}}>
        <div class="col-md-6" data-aos="fade-up">
          <img src={img_src} class="img-fuid rounded shadow" alt="investors" style={{height: '100%',width: '100%'}} />
        </div>
        <div class="col-md-6">
          <div style={{backgroundColor:'black'}}>
             <h6 class="text-white pl-4 pt-2 pb-2" style={{borderLeft: '5px solid orange'}}>{topic}</h6>
          </div>
             {description}
        </div>
      </div>
     </div> 
    
    );
}