import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

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
  
  
  return <BrowserRouter>
    <div className="App">
    <img className = 'logo' src = {logo} alt='logo'/>
     

  
<Switch>
  <Route path= "/pj1" component={Page1}/>
  <Route path= "/home" component={Home}/>
  <Route path="/About" component={About}/>
</Switch>
<Navbar></Navbar>


    


  
    </div>
    </BrowserRouter>
}


export default App;