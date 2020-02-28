import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
import data from '../yourdata';

class Contact extends Component {
    state = {  }
    render() { 
        return (  <div className = 'contact-title'>
        
                <Reveal effect="fadeInUp" bottom cascade> Contact.</Reveal>
        
        <Reveal effect="fadeInUp" bottom>
        <div className='contact-content'>
                
                Let’s create your next<br></br>
                <span className='amazing-color'>experience together</span>
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