import React from 'react';
import SectionTitle from './SectionTitle';
import Highlight from './Highlight';
import {highlightData} from './HighligthtData';

export default function CompanyHighlight(props){
    return(
        <section className = "bg-warning" id ="company-highlights" style={{borderTop: '2px solid black'}}>
            <div className="container pt-2 section-title-2"> 
                <SectionTitle
                    title ="COMPANY HIGHLIGHTS"
               /> 
               <div className="row text-center" style={{lineHeight: 1.1}}>
                  {highlightData.map((item) => {
                    return(  
                     <Highlight key={item.heading} style={item.style} heading={item.heading} paragraph={item.paragraph} color={item.color} data_aos={item.data_aos}/>
                    );   
                    })}  
               </div>
            </div> 
        </section>       
    );
}

