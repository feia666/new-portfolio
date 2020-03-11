import React from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route} from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Work from './components/work';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

import Page1 from './projects/pj1';
import'./media.css';
import Home from './home';


import logo from './components/logo.png';

function App() {
  
  
  return (
 
    <div className="App">
    <img className = 'logo' src = {logo} path= "/home" component={Home} alt='logo'/>
  
   <BrowserRouter>
   <Navbar></Navbar>
   <Route path= "/home" component={Home}/>
   <Route path= "/pj1" component={Page1}/>
  <Route path="/about" component={About}/>
  <Route path="/work" component={Work}/>
  <Route path="/contact" component={Contact}/>
  </BrowserRouter>
  
    </div>
    )
}


export default App;