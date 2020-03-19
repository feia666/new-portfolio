import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import data from '../yourdata';

class About extends Component {
    state = {  }
    render() { 
        return (<div className='about'>
            <div className='about-content'>
            <Slide bottom>
                <h1>About.</h1>
                {data.ShowAboutImage ? <img src={data.aboutImage} alt='about iamge'></img> : null}
            </Slide>
            <Slide bottom>
                    <p>{data.abouttext}</p>
            </Slide>

            </div>
        
            

        </div>  );
    }
}
 
export default About;