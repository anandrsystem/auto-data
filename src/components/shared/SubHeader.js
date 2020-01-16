import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const SubHeader = () => {
  const [isHomePage, setHomePage] = useState(false);
  if(isHomePage) {
    return <Redirect to='/' />
  }

  return (
    <div>
      <header>
        <div className="header-inner">
          <div className="logo"></div>
        </div>
        <div className="navbar">
          <ul className="d-none  d-md-inline-block">
            <li className="active"> <a href="#"> FEATURES </a> </li>
            <li> <a href="#"> PHOTOS </a></li>
          </ul>
          <div className="mob-menu">
            <button className="navbar-toggler d-block d-md-none">  <a href="#"> <i className="fa fa-bars"></i>  FEATURES </a> </button>
          </div>
          <div className="btn-wrap">
            <button type="button" className="btn btn-primary d-none  d-md-inline-block" onClick={() => setHomePage(true)}>New Compare </button>
            <button type="button" className="btn btn-primary">Build &amp; Price </button>
            <button type="button" className="btn btn-primary">Request a Quote</button>
            <button type="button" className="btn btn-primary d-none d-md-inline-block"> <i className="fa fa-print"></i> Print</button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default SubHeader;
