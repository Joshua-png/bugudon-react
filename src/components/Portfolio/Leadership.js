import React from 'react';
import SectionTitle from '../Home/SectionTitle';
import {LeadersData} from './LeadersData';
import EachLeader from './EachLeader';

export default function Leadership(){
    return(
        <section id="leadership" style={{borderTop: '2px solid black'}}>
           <div className="pt-3">  
             <SectionTitle title="LEADERSHIP"/>
           </div>
           <div className="container">
             <div className="row">
                 {
                    LeadersData.map(({name,img_src,description})=>{
                        return(
                           <EachLeader key={name} img_src={img_src} name={name} description={description}/>     
                        );
                    }) 
                 }
             </div>
           </div>      
        </section>    
    );
}