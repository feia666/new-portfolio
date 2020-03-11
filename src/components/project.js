import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
import '../App.css';



class Project extends Component {
    state = {  }
    render() { 
        return ( 
        <Reveal effect="fadeInUp" bottom>
        <div className='project'>
            <a href={this.props.url}>
                <img src={this.props.imageSrc} alt={this.props.title}></img>
             
            </a>
            <h1>{this.props.title}</h1>
            <span>{this.props.service}</span>
        </div> 
            </Reveal>);
    }
}
 
export default Project;