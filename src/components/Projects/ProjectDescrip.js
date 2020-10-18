import React from 'react';

export default function ProjectDescrip({img_src,topic,description}){
    return(
     <div className="container pt-3 phone-size"> 
        <div className="row" style={{paddingBottom:35}}>
        <div className="col-sm-6" data-aos="fade-up">
          <img src={img_src} className="img-fuid rounded shadow" alt="investors" style={{height: '100%',width: '100%'}} />
        </div>
        <div className="col-md-6">
          <div style={{backgroundColor:'black'}}>
             <h6 className="text-white pl-4 pt-2 pb-2" style={{borderLeft: '5px solid orange'}}>{topic}</h6>
          </div>
             {description}
        </div>
      </div>
     </div> 
    
    );
}