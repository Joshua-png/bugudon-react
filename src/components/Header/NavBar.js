import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar(){
    return(
        <header id="nav1">
            <div className="row">
            <div className="col-md-6">
                <div className="mr-auto">
                <div className="row bg-warning">
                    <div className="col-lg-2 col-md-3 logo">
                    <a href="index.html"><img src="static/img/logo.png" alt="" className="img-fluid logo-img" /></a>
                    </div>
                    <div className="col-md-6">
                    <h5 className="pt-2 media-label">Bugudon Limited</h5>
                    </div>
                </div>
                <div className="row" style={{backgroundColor:'black'}}>
                    <div className="col-md">
                    <h6 className="text-white logo-sub-text">Sustainable wealth creation and societies through mining</h6>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-6">
                <nav className="nav-menu d-none d-lg-block pl-0" id="nav">
                <ul>
                    <li className="active"><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/investorsection">Investors {'&'} Off takers</Link></li>
                    <li><Link to="/company">Company</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
                </nav>

            </div>
            </div>
        </header>
    );
}