import React from 'react';
import SectionTitle from './SectionTitle';
import ProjectCards from './ProjectCards';

export default function ProjectSection(){
    return(
        <section id="projects">
          <div className="container project-con">  
            <SectionTitle 
                title="PROJECTS" 
                subtitle="Bugudon Limited has significant interest in the project below and is working to bring them to the exploitation stage."
            />
            <ProjectCards />
          </div>
        </section>
    );
}