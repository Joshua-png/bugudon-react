import React from 'react';
import Carousels from '../Carousel/Carousels';
import SectionTitle from '../Home/SectionTitle';
import {ContactData} from './ContactData';
import ContactCards from './ContactCards';

export default function Contact(){
    return(
      <React.Fragment>  
        <Carousels 
          source1="static/img/contact_1.png"
          source2="static/img/mining-440743_1280smaller.jpg"
          source3="static/img/paddle-wheel-1051962_1280smaller.png"
        />
         <div class="container pt-3">
           <SectionTitle title="CONTACT US"/>
         </div>
         <div class="container text-center">
            <h4 class="font-weight-bold mb-0">Location:</h4>
            <p style={{lineHeight:1.5}} class="mb-2"><strong>Postal Address:</strong> – P.O.Box GP 4107, Accra <br />
                <strong>Email:</strong> yehodamines@yahoo.com <br />
                <strong>Call us:</strong> 233-20-8153899 233-2442760 <br />
            </p>
            <h4 class="font-weight-bold mb-0">Internship & Careers</h4>
            <p class="mb-0" style={{lineeight:1.5}}>Presently, there are no employment opportunities. However, we believe
                in working with brilliant minds seeking to support our company's objectives
                and mission. Kindly send us your profile and contact details, and we will
                reach you as and when opportunities arise. Thank you.</p>
       </div>

       <div class="container mt-3">
          <div class="row">
              {
                ContactData.map(({classes,title,info})=>{
                  return(
                    <ContactCards classes={classes} title={title} info={info} />
                  )
                })
              }
          </div>  
       </div>
      </React.Fragment> 
    )
}