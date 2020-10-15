import React from 'react';
import SectionTitle from './SectionTitle';
import BenefitCards from './BenefitCards';

export default function ProjectBenefits(){
    return(
        <section id="projects-benefits" className="bg-warning" style={{borderTop: '2px solid black'}}>
            <div className="container project-con section-title-2">
                <SectionTitle
                    title ="PROJECT BENEFITS"
                    subtitle="Proponents of Bugudon Limited believe that their proposed project will benefit all stakeholder stated as follows:"
                />
                <BenefitCards />
            </div>
        </section>
    );
}