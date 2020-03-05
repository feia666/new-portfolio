import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Work from './components/work';
import Contact from './components/Contact';


import'./media.css';




function Home() {
  
  
  return (
    <div className="App">
       <div className="App-header">
      <Header></Header>
      </div>


    <div className = 'about' id='about-test'>
    <About></About>
    </div>
    <div className='work'>
        <Work></Work>
      </div>

      <div className='contact'>
        <Contact></Contact>
      </div>
    </div>
  ); 
}


export default Home;