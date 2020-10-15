import React from 'react';
import ProjectSection from './ProjectSection';
import Carousels from './Carousel';
import ProjectBenefits from './ProjectBenefits';
import InvestorSection from './InvestorSection';
import CompanyHighlight from './CompanyHighlight';

export default function Home(){
    return(
        <React.Fragment>
            <Carousels />
            <ProjectSection />
            <ProjectBenefits />
            <InvestorSection />
            <CompanyHighlight />
        </React.Fragment>
    );
}