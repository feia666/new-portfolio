import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Work from './components/work';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

// import Page1 from './projects';
import'./media.css';

function App() {
  return <BrowserRouter>
    <div className="App">
      <Navbar></Navbar>
      <div className="App-header">
      <Header></Header>
      </div>
      {/* <Route path= "/pj1" component={Page1}/> */}



      <div className='work'>
        <Work></Work>
      </div>
      <div className='contact'>
        <Contact></Contact>
      </div>
    </div>
    </BrowserRouter>
}

export default App;