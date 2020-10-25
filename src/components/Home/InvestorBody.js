import React from 'react';
import investors from '../../contentJSON/homeInvestors.json'
import ReactMarkdownWithHtml from "react-markdown/with-html";


export default function InvestorBody() {
    return(
        <div className="row pb-3">
            <div className="col-md-6 h-100 pb-3">
            <img src={investors[0].image} className="shadow img-fuid rounded" alt="investors" style={{height: '85%',width : '100%'}} />
            </div>
            <div className="col-md-6 shadow h-100">
                <h4 className="font-weight-bold">{investors[0].title}</h4>
                <ReactMarkdownWithHtml children={investors[0].content} allowDangerousHtml />
        </div>
        <div className="col-md-6 shadow h-100">
                <h4 className="font-weight-bold">{investors[1].title}</h4>
                <ReactMarkdownWithHtml children={investors[1].content} allowDangerousHtml />
        </div>
        <div className="col-md-6 h-100">
            <img src={investors[1].image} className="shadow img-fluid rounded" alt="investors" style={{height: '85%',width: '100%'}} />
        </div>
     </div>
    );
}