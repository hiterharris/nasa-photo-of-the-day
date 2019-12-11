import React from 'react';
import logo from '../images/nasa-logo.svg';
import '../App.css';

export default function Nav() {
  return (
    <div className='Nav nav-menu'>
        <img className="logo" alt='Nasa Logo' src={logo} />
        <h1><a href='https://www.nasa.gov/' target='_blank' rel="noopener noreferrer">Home</a></h1>
        <h1><a href='https://www.nasa.gov/about/index.html' target='_blank' rel="noopener noreferrer">About</a></h1>
        <h1><a href='https://www.nasa.gov/multimedia/imagegallery/iotd.html' target='_blank' rel="noopener noreferrer">Gallery</a></h1>
        <h1><a href='https://www.nasa.gov/multimedia/nasatv/index.html#public' target='_blank' rel="noopener noreferrer">NASA TV</a></h1>
    </div>
  );
}
