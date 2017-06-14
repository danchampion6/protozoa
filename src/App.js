import React, { Component } from 'react';

import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Sidenav from './components/Sidenav.js';
import Canvas from './components/Canvas.js';




class App extends Component {
  render() {
    return (
      <div className="App">

      <Canvas/>
    
      <Sidenav/>
      <Footer/>
        
      </div>
    );
  }
}

export default App;
