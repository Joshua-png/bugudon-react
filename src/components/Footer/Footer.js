import React from 'react';
import {Link } from 'react-router-dom';

export default function Footer(){
    return(
  <footer id="footer" style={{borderTop: '2px solid white'}}>
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Links</h4>
            <ul>
              <li> <Link to="/projects">Projects</Link></li>
              <li> <Link to="/investorsection">Investors & Off takers</Link></li>
              <li> <Link to="/company">Company</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/privacy">Privacy policy</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p><strong>Location:</strong><br />
            H/No. C684 <br />
            Nii Kwamena Bonnie Crescent<br />
            Dzorwulu, Accra, Ghana<br /><br />

              <strong>Postal Address:</strong> <br />Post Office Box GP 4107<br />
              Accra. Ghana<br />
              <br />
            </p>

          </div>

          <div className="col-lg-3 col-md-6 footer-contact pushed-down">
            
            <p>
              <strong className="font-weight-bold">Phone:</strong> +233 208153899 <br /><br />
              <strong>Email:</strong><br /> enquiries@bugudon.com<br />
                                          Togbe@bugudon.com<br />
                                          yehodamines@yahoo.com<br />
            </p>
          </div>

          <div className="col-lg-3 col-md-6 footer-info">
            <h3> Careers</h3>
            <p>Presently, there are no employment opportunities.
              However, we believe in working with brilliant minds
              seeking to support our company's objectives and mission.
              Kindly send us your profile and contact details, and we will
              reach you as and when opportunities arise. Thank you.</p>
            <br />

            {/* <a href="contact.html" className="text-dark" > </a>*/}
            <button className="btn btn-warning"> Send mail</button>

          </div>

        </div>
      </div>
    </div>
    <div className="container-fluid p-0" style={{backgroundColor:'ash'}}>
      <p className="copyright mb-0">
        &copy; Copyright <strong><span>Company</span></strong>. All Rights Reserved. Developed and maintained by <a href="https://sterde.com">Sterde</a>
      </p>
    </div>
    <span className="back-to-top"><i className="icofont-simple-up"></i></span>
  </footer>

  

 );
}


