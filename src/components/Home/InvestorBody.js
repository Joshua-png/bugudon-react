import React from 'react';

export default function InvestorBody(){
    return(
        <div className="row pb-3">
            <div className="col-md-6 h-100 pb-3">
            <img src="static/img/business-163464_1280.jpg" className="shadow img-fuid rounded" alt="investors" style={{height: '85%',width : '100%'}} />
            </div>
            <div className="col-md-6 shadow h-100">
            <h4 className="font-weight-bold">Investors</h4>
            <p className="text-justify line-style">In line with the company’s mission of progressively harnessing the best philosophies,
                practices, tools, partnerships, and resources to grow the company’s mining and process
                capability, the proponents of Bugudon Limited are seeking investors in the various projects
                that the company is promoting.<br />

            <span className="pt-4">The company has the concession rights, and have further invested in some amount of geological
                works to establish economic quantities of gold on all concession. And for this reason, is
                seeking for investors to exploit the potential together.</span><br />

                Interest entities can send emails to investors@bugudon.com <br /></p>
        </div>
        <div className="col-md-6 shadow h-100">
            <h4 className="font-weight-bold">Off-takers</h4>
            <p className="text-justify mb-0 line-style">Bugudon Limited is working with its partners to commence production
                of at least one of the minerals listed below on its project by first
                (1st) quarter 2022.</p>

            <p className="line-style mb-0">Projected mineral products are:
            <ol className="mb-0" style={{lineHeight: 1.5}}>
            <li>Gold bars;</li>
            <li>Ilmenite.</li>
            </ol>

            <p style={{lineHeight: 1.5}} className="mb-0">The company is seeking potential off-taker arrangements from reputable
                entities that will ensure ready demand for all minerals to be produced.</p>

                Interest entities can send emails to offtakers@bugudon.com</p>
        </div>
        <div className="col-md-6 h-100">
            <img src="static/img/Hnet-image (4).gif" className="shadow img-fluid rounded" alt="investors" style={{height: '85%',width: '100%'}} />
        </div>
     </div>
    );
}