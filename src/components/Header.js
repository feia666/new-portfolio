import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import data from '../yourdata';




class Header extends Component {
    state = {}

    render() {
        return (<div>
        <h1 className='heading-background'>DESIGN</h1>
            <header>
            
                    {/* <Reveal effect="fadeInUp" bottom cascade>{data.name}</Slide> */}
               
            </header>
            <Slide effect="fadeInUp" bottom>
            <p className='header-title'>
            {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
            {data.headerTagline[2]}
               <br></br>
                    <button><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" >Contact</a></button>
                </p>
            </Slide>



        </div>);
    }
}

export default Header;