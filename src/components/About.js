import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
import data from '../yourdata';

class About extends Component {
    state = {  }
    render() { 
        return (<div className='about'>
            <div className='about-content'>
            <h1><Reveal Reveal effect="fadeInUp" bottom cascade>About.</Reveal></h1>
            <Reveal Reveal effect="fadeInUp" bottom>
                    <p>{data.abouttext}</p>
            </Reveal>

            </div>
            {data.ShowAboutImage ? <img src={data.aboutImage} alt='about iamge'></img> : null}
            

        </div>  );
    }
}
 
export default About;