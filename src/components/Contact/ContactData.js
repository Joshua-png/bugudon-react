import React from 'react';
import {faEnvelope, faPhone, faMap } from '@fortawesome/free-solid-svg-icons';

export const ContactData = [
    {
        classes: faMap,
        title:"Location",
        info:<React.Fragment>
              H/No. C684, <br />
              Nii Kwamena Bonnie Crescent
              Dzorwulu, Accra, Ghana
        </React.Fragment>
    },
    {
        classes:faEnvelope,
        title:"Postal Address",
        info:<React.Fragment>
              <p> Post Office Box GP 4107<br />
              Accra, Ghana</p>
        </React.Fragment>
    },
    {
        classes:faEnvelope,
        title:"Email Us",
        info:<React.Fragment>
              <p>enquiries@bugudon.com<br />
                Togbe@bugudon.com<br />
                yehodamines@yahoo.com
               </p>
        </React.Fragment>
    },
    {
        classes:faPhone,
        title:"Call Us",
        info:<React.Fragment>
              <p>+233 208153899</p>
        </React.Fragment>
    }
]

