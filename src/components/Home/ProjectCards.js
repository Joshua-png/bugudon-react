import React from 'react';
import ReadMoreAndLess from 'react-read-more-less';
import projects from '../../contentJSON/projects.json'
import ReactMarkdownWithHtml from "react-markdown/with-html";
// const ReactMarkdownWithHtml = require('react-markdown/with-html')


export default function ProjectCards(){
    return(
        <div className="row pt-2 pb-3">
        <div className="col-md-4">
          <div className="shadow card bg-white mb-3 border-0 h-100" data-aos="fade-up">
            <div className="card-header text-center text-white" style={{ backgroundColor: 'black' }}>
              {projects[0].title}
          </div>
          <div className="card-body zero-pt-pb pr-2 pl-2">
              <p className="card-text pro-body-content text-justify">
                <ReactMarkdownWithHtml children={projects[0].content} allowDangerousHtml />
            </p>
              <ReadMoreAndLess
                  charLimit={0}
                  readMoreText={"READ MORE" }
                  readLessText={"READ LESS" }
               >
                  {projects[0].readMoreText}
              </ReadMoreAndLess>
          </div>
        </div>
        </div>
        <div className="col-md-4 zero-pr">
          <div className="shadow card bg-white mb-3 border-0 h-100" data-aos="fade-up" data-aos-delay="200">
            <div className="card-header text-center text-white" style={{ backgroundColor: 'black' }}>{projects[1].title}</div>
          <div className="card-body zero-pt-pb pr-2 pl-2">
              <p className="card-text pro-body-content text-justify">
                <ReactMarkdownWithHtml children={projects[1].content} allowDangerousHtml />
           </p>
           <ReadMoreAndLess
                  charLimit={0}
                  readMoreText={"READ MORE"}
                  readLessText={"READ LESS" }
            >
                  {projects[1].readMoreText}
            </ReadMoreAndLess>
          </div>
        </div>
        </div>
        <div className="col-md-4 zero-pr">
          <div className="shadow card bg-white mb-3 border-0 h-100" data-aos="fade-up" data-aos-delay="400">
            <div className="card-header text-center text-white" style={{ backgroundColor: 'black' }}>
              {projects[2].title}
          </div>
          <div className="card-body zero-pt-pb pr-2 pl-2">
              <p className="card-text pro-body-content text-justify">
                {console.log(projects[2].content)}
                <ReactMarkdownWithHtml children={projects[2].content} allowDangerousHtml/>
             </p>
             <ReadMoreAndLess
                  charLimit={0}
                  readMoreText={"READ MORE"}
                  readLessText={"READ LESS" }
               >
                {projects[2].readMoreText}
              </ReadMoreAndLess>
          </div>
        </div>
        </div>
     </div> 
    );
}
