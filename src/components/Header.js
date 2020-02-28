import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
import data from '../yourdata';
import logo from './logo.png';


class Header extends Component {
    state = {}

    render() {
        return (<div>
        <h1 className='heading-background'>DESIGN</h1>
            <header>
            
                    {/* <Reveal effect="fadeInUp" bottom cascade>{data.name}</Reveal> */}
                <img className = 'logo' scr = 'logo.png' alt='logo'/>
            </header>
            <Reveal effect="fadeInUp" bottom>
            <p className='header-title'>
            {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
            {data.headerTagline[2]}
               <br></br>
                    <button><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" >Contact</a></button>
                </p>
            </Reveal>



        </div>);
    }
}

export default Header;