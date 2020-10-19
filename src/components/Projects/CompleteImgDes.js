import React from 'react';
import ProjectDescrip from './ProjectDescrip';


export default function CompleteImgDes(){
    return(
      <React.Fragment>  
        <ProjectDescrip 
            img_src = "static/img/jonny-caspari-1je5j4aN2RI-unsplash.jpg"
            topic ="Bugudon Gold Mine - Awaham Project"
            description = {<React.Fragment><p className="text-justify" style={{lineHeight: 1.1}}>The proposed project
            will be on the firm’s 8.44Km2 concession at Awaham in the West Akim
            Municipal Assembly of the Eastern Region of Ghana. The concession
            has a proven reserve of 5,700,000m3 of alluvial gold ore deposition
            with an average grade of 0.5g/m3 and an estimated gold reserve of
            91,639 ounces. The analysis of gold produced from the concession
            shows a gold purity of 92% or 22 karats in its natural state.
            Also found in association with the alluvial gold is economic quantities
            of ilmenite (FeTiO3), a source of ore used in the production of titanium (Ti).</p>
          <p className="text-justify" style={{lineHeight: 1.1}}>The proponents of Bugudon Gold Mine are seeking to harness and test the
            proven and unproven mineral potential of the project by implementing a
            four (4) phase operation. The phases are designed as follows:</p>
          <ol className="text-justify pl-0" style={{lineHeight: 1.1}}>
            <li>Phase 1: Exploitation of alluvial gold and ilmenite with a
              500m3 alluvial gold and ilmenite plant. The thought process here is
              to tap into the established commercial quantities of mineralization
              to ensure production and cash flow within year 1;</li>
            <li>Phase 2: Hard rock exploration to work is to establish or
              debunk the idea that the concession has economic quantities of hard
              rock gold and ilmenite;</li>
            <li>Phase 3: Installation and running a CIL plant and Ilmenite Gravity
              Separation Plant, this phase will be dependent on the success of phase 2
              or the establishment of commercial quantities of hard rock gold and ilmenite;</li>
            <li>Phase 4: Installation and running TiO2 Plant to convert about
              80% of expected ilmenite produce on-site into titanium dioxide as a value-added
              product for export.</li>
          </ol></React.Fragment>}
        />


        <ProjectDescrip
           img_src="static/img/industry-2023592_1280.jpg"
           topic="Bugudon 2 Gold Mine - Wamase Project"
           description ={
            <React.Fragment>     
                <p className="text-justify" style={{lineHeight: 1.1}}>The proposed project
                will be on the firm’s 19.11Km2 concession at Wamase in the West Akim
                Municipal Assembly of the Eastern Region of Ghana. The concession has
                a proven reserve of 10,060,000m3 of alluvial gold ore deposition with
                an average grade of 0.5g/m3 and an estimated gold reserve of 161,736ounces.
                The analysis of gold produced from the concession shows a gold purity of
                92% or 22 karats in its natural state. Also found in association with
                the alluvial gold is economic quantities of ilmenite (FeTiO3), a source
                of ore used in the production of titanium (Ti).</p>
            <p className="text-justify" style={{lineHeight: 1.1}}>The proponents of
                Bugudon 2 Gold Mine are seeking to harness and test the proven and
                unproven mineral potential of the project by implementing a four (4)
                phase operation. The phases are designed as follows:</p>
            <ol className="text-justify pl-0" style={{lineHeight: 1.1}}>
                <li>Phase 1: Exploitation of alluvial gold and ilmenite with a 500m3
                alluvial gold and ilmenite plant. The thought process here is to tap
                into the established commercial quantities of mineralization to ensure
                production and cash flow within year 1;</li>
                <li>Phase 2: Hard rock exploration to work is to establish or
                debunk the idea that the concession has economic quantities of hard
                rock gold and ilmenite;</li>
                <li>Phase 3: Installation and running a CIL plant and Ilmenite Gravity
                Separation Plant, this phase will be dependent on the success of phase 2
                or the establishment of commercial quantities of hard rock gold and ilmenite;</li>
                <li>Phase 4: Installation and running TiO2 Plant to convert about
                80% of expected ilmenite produce on-site into titanium dioxide as a value-added
                product for export.</li>
            </ol>
           </React.Fragment>     
           }
        />


        <ProjectDescrip 
            img_src="static/img/excavators-1050501_1280.jpg"
            topic="Wenof Gold Mine – Yamfuri Project"
            description = {
                <React.Fragment>
                    <p className="text-justify" style={{lineHeight: 1.1}}>The proposed project
                    will be on the firm’s 31.89Km2 concession at Moseaso, Asankragwa, in
                    the Amenfi District Assembly of the Western Region of Ghana. The Concession
                    has an independent geological report by SEMS Exploration, Ghana a member
                    of the West African Consultancy group. The report is in compliance of
                    (‘‘JORC Code’’) and (‘‘ VALMIN Code’’). The report indicates a vast potential
                    for alluvial gold deposits and recommends the explorations for hard rock gold
                    deposits as the potentials exists.Wenof is therefore seeking a potential investor
                    to undertake the detailed exploration of the alluvial deposits as well as the hard
                    rock potential. We are open to loan investment finances on explorations joint partners.</p>
                </React.Fragment>
            }
        />
      </React.Fragment>  
    );
}