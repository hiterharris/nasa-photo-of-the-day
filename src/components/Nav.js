import React from 'react';
import logo from '../images/nasa-logo.svg';
import '../App.css';

function Nav() {
  return (
    <div className='Nav nav-menu'>
        <img className="logo" src={logo} />
        <h1><a href='https://www.nasa.gov/' target='_blank'>Home</a></h1>
        <h1><a href='https://www.nasa.gov/about/index.html' target='_blank'>About</a></h1>
        <h1><a href='https://www.nasa.gov/multimedia/imagegallery/iotd.html' target='_blank'>Gallery</a></h1>
        <h1><a href='https://www.nasa.gov/multimedia/nasatv/index.html#public' target='_blank'>NASA TV</a></h1>
    </div>
  );
}

export default Nav;