import React from 'react';

export default function Highlight({style, heading, paragraph, color,data_aos}){
    return(
        <div class="col-md-4 p-3">
            <div class=" shadow col h-100" style={style} data-aos={data_aos}> 
                <h5 class="font-weight-bolder pt-2">{heading}</h5>
                <p style={{color}} className="font-weight-bold">{paragraph}</p>
            </div>
        </div>
    );
}
