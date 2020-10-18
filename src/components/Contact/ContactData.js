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
              Post Office Box GP 4107<br />
              Accra, Ghana
        </React.Fragment>
    },
    {
        classes:faEnvelope,
        title:"Email Us",
        info:<React.Fragment>
              enquiries@bugudon.com<br />
                Togbe@bugudon.com<br />
                yehodamines@yahoo.com
        </React.Fragment>
    },
    {
        classes:faPhone,
        title:"Call Us",
        info:<React.Fragment>
              +233 208153899
        </React.Fragment>
    }
]

