import React from 'react';
import ReadMoreAndLess from 'react-read-more-less';


export default function ProjectCards(){
    return(
        <div className="row pt-2 pb-3">
        <div className="col-md-4 pl-0 pr-0">
          <div className="shadow card bg-white mb-3 border-0 h-100" data-aos="fade-up">
          <div className="card-header text-center text-white" style={{backgroundColor:'black'}}>Bugudon Gold Mine - Awaham Project</div>
          <div className="card-body zero-pt-pb pr-2 pl-2">
            <p className="card-text pro-body-content text-justify">The proposed Bugudon Gold Mine project will be on the firm’s 8.44Km2
              concession at Awaham in the West Akim Municipal Assembly of the Eastern
              Region of Ghana. The concession has a proven reserve of 5,700,000m3 of
              alluvial gold ore deposition with an average grade of 0.5g/m3 and an estimated
              gold reserve of 91,639 ounces. The analysis of gold produced from the
              concession shows a gold purity of 92% or 22 karats in its natural state.
              Also found in association with the alluvial gold is economic quantities
              of ilmenite (FeTiO3), a source of ore used in the production of titanium (Ti).</p>
              <ReadMoreAndLess
                  charLimit={0}
                  readMoreText={<React.Fragment><button className="text-white btn btn-dark font-weight-bold mt-2 ml-2"> READ MORE </button></React.Fragment> }
                  readLessText={<React.Fragment><br /><button className="text-white btn btn-dark font-weight-bold"> READ LESS </button></React.Fragment> }
               >
                  {`The above clearly signifies, Bugudon Limited associated project concept
                    is in line with the firm’s mission of progressively harnessing best
                    philosophies, practices, tools, partnerships, and resources to grow the
                    company’s mining and process capability.`
                  }
              </ReadMoreAndLess>
          </div>
        </div>
        </div>
        <div className="col-md-4 zero-pr">
          <div className="shadow card bg-white mb-3 border-0 h-100" data-aos="fade-up" data-aos-delay="200">
          <div className="card-header text-center text-white" style={{backgroundColor:'black'}}>Bugudon 2 Gold Mine - Wamase Project</div>
          <div className="card-body zero-pt-pb pr-2 pl-2">
            <p className="card-text pro-body-content text-justify">Bugudon Gold Mine’s proposed project will be on the firm’s 19.11Km2 concession
              at Wamase in the West Akim Municipal Assembly of the Eastern Region of Ghana.
              The concession has a proven reserve of 10,060,000m3 of alluvial gold ore
              deposition with an average grade of 0.5g/m3 and an estimated gold reserve of
              161,736ounces. The analysis of gold produced from the concession shows a gold
              purity of 92% or 22 karats in its natural state. Also found in association with
              the alluvial gold is economic quantities of ilmenite (FeTiO3), a source of ore
              used in the production of titanium (Ti).
              <ReadMoreAndLess
                  charLimit={0}
                  readMoreText={<React.Fragment><button className="text-white btn btn-dark font-weight-bold mt-2 ml-2"> READ MORE</button></React.Fragment> }
                  readLessText={<React.Fragment><br /><button className="text-white btn btn-dark font-weight-bold"> READ LESS </button></React.Fragment> }
               >
                  {`The above clearly signifies, Bugudon Limited associated project concept
                    is in line with the firm’s mission of progressively harnessing best
                    philosophies, practices, tools, partnerships, and resources to grow the
                    company’s mining and process capability.`
                  }
              </ReadMoreAndLess>
           </p>
          </div>
        </div>
        </div>
        <div className="col-md-4 zero-pr">
          <div className="shadow card bg-white mb-3 border-0 h-100" data-aos="fade-up" data-aos-delay="400">
          <div className="card-header text-center text-white" style={{backgroundColor:'black'}}>Wenof Gold Mine – Moseaso Project</div>
          <div className="card-body zero-pt-pb pr-2 pl-2">
            <p className="card-text pro-body-content text-justify">The proposed project will be on the firm’s 31.89Km2 concession at <mark className="bg-warning">Moseaso,
                  Asankragwa</mark>, in the <mark className="bg-warning">Amenfi District Assembly</mark> of the Western Region of Ghana.
                The Concession has an independent geological report by SEMS Exploration,
                Ghana a member of the West African Consultancy group. The report is in
                compliance of (‘‘JORC Code’’) and (‘‘ VALMIN Code’’). The report indicates
                a vast potential for alluvial gold deposits and recommends the explorations
                for hard rock gold deposits as the potentials exists.Wenof is therefore seeking
                a potential investor to undertake the detailed exploration of the alluvial deposits
                as well as the hard rock potential. We are open to loan investment finances on
                explorations joint partners
                <ReadMoreAndLess
                  charLimit={0}
                  readMoreText={<React.Fragment><button className="text-white btn btn-dark font-weight-bold mt-2 ml-2"> READ MORE</button></React.Fragment> }
                  readLessText={<React.Fragment><br /><button className="text-white btn btn-dark font-weight-bold"> READ LESS </button></React.Fragment> }
               >
                  {`The above clearly signifies, Bugudon Limited associated project concept
                    is in line with the firm’s mission of progressively harnessing best
                    philosophies, practices, tools, partnerships, and resources to grow the
                    company’s mining and process capability.`
                  }
              </ReadMoreAndLess>
             </p>
          </div>
        </div>
        </div>
     </div> 
    );
}
