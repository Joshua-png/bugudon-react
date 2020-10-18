import React from 'react';

export default function EachLeader({img_src,name,description}){
    return(
        <div className="col-md-6">
        <div className="col-md-12">
          <img src={img_src} alt="leadership" className="img-fluid mr-4" style={{float: 'left'}} data-aos="fade-up" />
          <h5 className="font-weight-bold" style={{lineHeight:1.3}}>{name}</h5>
          <p className="text-justify" style={{lineHeight:1.3}}>{description}</p>
        </div>
      </div>
    );
}