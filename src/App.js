import React from 'react';
import Nav from './components/Nav';
import Card from './components/Card';
import DropdownContainer from './components/DropdownContainer';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Nav />
      <DropdownContainer />
      <Card />
    </div>
  );
}

export default App;
