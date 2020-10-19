import React from 'react';
import SectionTitle from './SectionTitle';
import InvestorBody from './InvestorBody';

export default function InvestorSection(){
    return(
        <section id="investors-off-takers" style={{borderTop: '2px solid black'}}>
           <div className="container project-con p-investor">
               <SectionTitle
                  title ="INVESTORS & OFF-TAKERS"
                /> 
                <InvestorBody />
           </div>
        </section>   
    );
}