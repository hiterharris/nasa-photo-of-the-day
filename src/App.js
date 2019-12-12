import React from 'react';
import Nav from './components/Nav';
import PhotoCard from './components/PhotoCard';
import './App.css';

export default function App() {
  return (
    <div className='app'>
      <Nav />
      <PhotoCard />
    </div>
  );
}
