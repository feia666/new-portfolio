import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
import data from '../yourdata';

class Contact extends Component {
    state = {  }
    render() { 
        return (  <div>
        <h1>
                <Reveal effect="fadeInUp" bottom cascade> Contact.</Reveal>
        </h1>
        <Reveal effect="fadeInUp" bottom>
        <div className='contact-content'>
                {/* <h1>
                Let’s create your next<br></br>
                <span className='amazing-color'>experience together</span></h1> */}
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                <ul>
                    {data.social.map((link,index)=>(
                        <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}   
                </ul>
        </div>
        </Reveal>

           
        </div>);
    }
}
 
export default Contact;