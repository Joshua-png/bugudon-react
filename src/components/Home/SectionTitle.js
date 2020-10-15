import React from 'react';

export default function SectionTitle(props){
    return(
        <div className="section-title project-heading">
          <h2>{props.title}</h2>
          <p>{props.subtitle}</p>
        </div>
    );
}