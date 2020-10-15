import React from 'react';

export default function({classes,title,info}){
    return(
        <div class="col-lg-3 col-md-6">
            <div class="info-box mb-4 shadow text-center p-3" style={{height:200,width:250}}>
              <i className={classes}></i>
                <h3><strong>{title}</strong></h3>
              <p>
                {info}
              </p>
              <p></p>
            </div>
          </div>
    )
}