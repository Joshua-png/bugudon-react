import React from 'react';

export default function Map(){
    return(
        <div className="col-lg-6  map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d127052.55163192659!2d-0.27637432927504807!3d5.6562688855568135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0xfdf9f753c779a8f%3A0x714bb4bd8453e233!2sGreater%20Accra%20Region!3m2!1d5.6860408!2d-0.2816745!5e0!3m2!1sen!2sgh!4v1592427265627!5m2!1sen!2sgh" className="w-100 h-100" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0" title="map"></iframe>
        </div>
    );
}