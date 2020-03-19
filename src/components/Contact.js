import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import data from '../yourdata';

class Contact extends Component {
    state = {  }
    render() { 
        return (  <div>
        <h1>
                < Slide bottom > Contact.</ Slide>
        </h1>
        < Slide  bottom>
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
        </ Slide>

           
        </div>);
    }
}
 
export default Contact;